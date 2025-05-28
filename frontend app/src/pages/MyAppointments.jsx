import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')
    const [loading, setLoading] = useState(true)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            setAppointments(data.appointments.reverse())
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response)
                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div className="pb-24 md:pb-10">
            <h1 className='pb-3 mt-6 text-xl font-medium text-gray-700 border-b'>My Appointments</h1>
            
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : appointments.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">You don't have any appointments yet</p>
                    <button 
                        onClick={() => navigate('/doctors')}
                        className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-all"
                    >
                        Book an Appointment
                    </button>
                </div>
            ) : (
                <div className='space-y-4 mt-4'>
                    {appointments.map((item, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-sm overflow-hidden'>
                            {/* Appointment Status Banner */}
                            {item.cancelled && (
                                <div className="bg-red-100 text-red-600 text-center py-1 font-medium text-sm">
                                    Appointment Cancelled
                                </div>
                            )}
                            {item.isCompleted && (
                                <div className="bg-green-100 text-green-600 text-center py-1 font-medium text-sm">
                                    Appointment Completed
                                </div>
                            )}
                            {item.payment && !item.isCompleted && !item.cancelled && (
                                <div className="bg-blue-100 text-blue-600 text-center py-1 font-medium text-sm">
                                    Payment Completed
                                </div>
                            )}
                            
                            <div className='p-4'>
                                {/* Doctor Info */}
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <div className="flex-shrink-0">
                                    <img 
  className='w-full sm:w-32 h-32 object-contain rounded-lg bg-[#EAEFFF]' 
  src={item.docData.image} 
  alt={item.docData.name} 
/>

                                    </div>
                                    <div className='flex-1 text-sm text-gray-600'>
                                        <h2 className='text-gray-800 text-lg font-semibold'>{item.docData.name}</h2>
                                        <p className="text-primary font-medium">{item.docData.speciality}</p>
                                        
                                        <div className="mt-2">
                                            <p className='text-gray-700 font-medium'>Address:</p>
                                            <p>{item.docData.address.line1}</p>
                                            <p>{item.docData.address.line2}</p>
                                        </div>
                                        
                                        <div className="mt-3 bg-gray-50 p-2 rounded flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className='text-gray-700'>
                                                <span className="font-medium">{slotDateFormat(item.slotDate)}</span> | <span className="font-medium">{item.slotTime}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Action Buttons */}
                                {!item.cancelled && !item.isCompleted && (
                                    <div className='mt-4 flex flex-col gap-2'>
                                        {!item.payment && payment !== item._id && (
                                            <button 
                                                onClick={() => setPayment(item._id)} 
                                                className='w-full py-3 border border-primary rounded-lg text-primary font-medium hover:bg-primary hover:text-white transition-all'
                                            >
                                                Pay Online
                                            </button>
                                        )}
                                        
                                        {!item.payment && payment === item._id && (
                                            <div className="space-y-2">
                                                <button 
                                                    onClick={() => appointmentStripe(item._id)} 
                                                    className='w-full py-3 border rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center'
                                                >
                                                    <img className='h-6' src={assets.stripe_logo} alt="Pay with Stripe" />
                                                </button>
                                                
                                                <button 
                                                    onClick={() => appointmentRazorpay(item._id)} 
                                                    className='w-full py-3 border rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center'
                                                >
                                                    <img className='h-6' src={assets.razorpay_logo} alt="Pay with Razorpay" />
                                                </button>
                                                
                                                <button 
                                                    onClick={() => setPayment('')} 
                                                    className='w-full py-2 text-sm text-gray-500 hover:text-gray-700'
                                                >
                                                    Cancel Payment
                                                </button>
                                            </div>
                                        )}
                                        
                                        {!item.cancelled && !item.isCompleted && (
                                            <button 
                                                onClick={() => cancelAppointment(item._id)} 
                                                className='w-full py-3 border border-red-500 rounded-lg text-red-500 font-medium hover:bg-red-500 hover:text-white transition-all'
                                            >
                                                Cancel Appointment
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyAppointments
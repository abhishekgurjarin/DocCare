import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col md:flex-row items-center bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-16 md:my-20 md:mx-10'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 text-center md:text-left py-10 sm:py-14 md:py-16 lg:py-24'>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight'>
                    <p>Book Appointment</p>
                    <p className='mt-3 sm:mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3.5 rounded-full mt-6 hover:scale-105 transition-all'
                >
                    Book Now
                </button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='md:w-1/2 lg:w-[370px] relative flex justify-center md:justify-end mt-8 md:mt-0'>
                <img 
                    className='w-2/3 sm:w-1/2 md:w-full max-w-xs md:max-w-md' 
                    src={assets.appointment_img} 
                    alt="Appointment Illustration" 
                />
            </div>

        </div>
    )
}

export default Banner

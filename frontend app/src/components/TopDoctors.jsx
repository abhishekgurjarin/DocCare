import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 sm:gap-6 py-10 sm:py-16 text-[#262626] px-4'>
            <h1 className='text-2xl sm:text-3xl font-semibold text-center leading-tight'>Top Doctors to Book</h1>
            <p className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-center text-sm sm:text-base text-[#5C5C5C]'>
                Simply browse through our extensive list of trusted doctors.
            </p>
            
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-6'>
                {doctors.slice(0, 8).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='border border-[#C9D8FF] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md bg-white' 
                        key={index}
                    >
                        <div className="w-full h-48 sm:h-56 overflow-hidden bg-[#EAEFFF]">
                            <img 
                                className='w-full h-full object-cover object-top' 
                                src={item.image} 
                                alt={item.name} 
                                loading="lazy"
                            />
                        </div>
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-xs ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></div>
                                <p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-[#262626] text-base sm:text-lg font-semibold mt-1 line-clamp-1'>{item.name}</p>
                            <p className='text-[#5C5C5C] text-xs sm:text-sm mt-1'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                className='bg-primary text-white px-10 py-3 rounded-full mt-8 hover:bg-primary-dark transition-all duration-300 text-sm sm:text-base font-medium'
            >
                View All Doctors
            </button>
        </div>
    )
}

export default TopDoctors

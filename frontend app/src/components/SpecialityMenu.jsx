import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-3 sm:gap-4 py-10 sm:py-16 text-[#262626] px-2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-center'>Find by Speciality</h1>
            <p className='sm:w-2/3 md:w-1/2 lg:w-1/3 text-center text-xs sm:text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            
            <div className='w-full mt-4 sm:mt-5'>
                <div className='flex sm:justify-center gap-4 w-full overflow-x-auto pb-4 px-2 scrollbar-hide'>
                    {specialityData.map((item, index) => (
                        <Link 
                            to={`/doctors/${item.speciality}`} 
                            onClick={() => scrollTo(0, 0)} 
                            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-5px] transition-all duration-300' 
                            key={index}
                        >
                            <div className="bg-gray-50 rounded-full p-2 mb-2">
                                <img 
                                    className='w-14 h-14 sm:w-20 sm:h-20 object-contain' 
                                    src={item.image} 
                                    alt={item.speciality} 
                                    loading="lazy"
                                />
                            </div>
                            <p className="text-center font-medium">{item.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SpecialityMenu
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden'>
            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center gap-3 sm:gap-4 py-6 sm:py-8 md:py-[10vw] md:mb-[-30px]'>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight text-center md:text-left'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm font-light'>
                    <img className='w-20 sm:w-24' src={assets.group_profiles} alt="Doctor profiles" />
                    <p className='text-center md:text-left'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-2 sm:mt-3'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative mt-4 md:mt-0'>
                <img 
                    className='w-full md:absolute bottom-0 h-auto rounded-lg object-cover' 
                    src={assets.header_img} 
                    alt="Doctor with patient" 
                    loading="eager"
                />
            </div>
        </div>
    )
}

export default Header
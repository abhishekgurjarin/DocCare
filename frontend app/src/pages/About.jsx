import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="pb-24 md:pb-10 px-4 sm:px-0">
      <div className='text-center pt-6 sm:pt-10 mb-8'>
        <h1 className='text-2xl sm:text-3xl font-medium'>
          <span className='text-[#707070]'>ABOUT</span> <span className='text-gray-700 font-semibold'>US</span>
        </h1>
      </div>

      <div className='mb-10 flex flex-col md:flex-row gap-6 md:gap-12'>
        <div className="md:w-5/12 lg:w-4/12">
          <img 
            className='w-full rounded-lg shadow-sm object-cover' 
            src={assets.about_image} 
            alt="DocCare Team" 
            loading="eager"
          />
        </div>
        <div className='flex flex-col justify-center gap-4 md:gap-6 md:w-7/12 lg:w-8/12 text-sm sm:text-base text-gray-600 mt-6 md:mt-0'>
          <p>Welcome to DocCare, your trusted partner in managing your healthcare needs conveniently and efficiently. At DocCare, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>DocCare is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, DocCare is here to support you every step of the way.</p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mt-2">
            <h3 className='text-gray-800 font-medium text-lg mb-2'>Our Vision</h3>
            <p>Our vision at DocCare is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
          </div>
        </div>
      </div>

      <div className='text-xl sm:text-2xl font-medium my-8 text-center sm:text-left'>
        <h2>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></h2>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
        <div className='border rounded-lg px-6 py-6 flex flex-col gap-3 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm'>
          <h3 className="font-semibold text-lg">EFFICIENCY</h3>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border rounded-lg px-6 py-6 flex flex-col gap-3 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm'>
          <h3 className="font-semibold text-lg">CONVENIENCE</h3>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border rounded-lg px-6 py-6 flex flex-col gap-3 hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-sm'>
          <h3 className="font-semibold text-lg">PERSONALIZATION</h3>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      {/* Additional Mobile-Friendly Section */}
      <div className="bg-gray-50 rounded-lg p-6 mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-4">Our Commitment</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-3 text-white mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Patient Privacy</h3>
              <p className="text-sm text-gray-600">We prioritize the security and confidentiality of your medical information.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-3 text-white mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Fast Response</h3>
              <p className="text-sm text-gray-600">Quick appointment confirmations and timely reminders for your scheduled visits.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-primary rounded-full p-2 mr-3 text-white mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Customizable Experience</h3>
              <p className="text-sm text-gray-600">Personalize your healthcare journey with preferences and favorite doctors.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

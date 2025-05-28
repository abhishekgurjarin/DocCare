import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext)

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ]

  const applyFilter = () => {
    setLoading(true)
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
    setLoading(false)
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  const handleSpecialityClick = (selectedSpeciality) => {
    if (speciality === selectedSpeciality) {
      navigate('/doctors')
    } else {
      navigate(`/doctors/${selectedSpeciality}`)
    }
    setShowFilter(false)
    scrollTo(0, 0)
  }

  return (
    <div className="pb-24 md:pb-10 px-2 sm:px-0">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl font-medium text-gray-700">
          {speciality ? `${speciality} Doctors` : 'All Doctors'}
        </h1>
        <button 
          onClick={() => setShowFilter(!showFilter)} 
          className="sm:hidden flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>
      </div>
      
      <p className='text-gray-600 text-sm mb-5'>Browse through our specialist doctors and book your appointment.</p>
      
      <div className='flex flex-col sm:flex-row items-start gap-5'>
        {/* Filter Panel - Mobile Dropdown / Desktop Sidebar */}
        {showFilter && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => setShowFilter(false)}></div>
        )}
        
        <div className={`${showFilter ? 'fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 z-50 max-h-[70vh] overflow-y-auto' : 'hidden'} sm:static sm:block sm:bg-transparent sm:p-0 sm:max-h-none sm:overflow-visible sm:w-56`}>
          <div className="flex justify-between items-center mb-3 sm:hidden">
            <h3 className="font-medium">Filter by Speciality</h3>
            <button onClick={() => setShowFilter(false)} className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-2 sm:sticky sm:top-4">
            {specialities.map((item, index) => (
              <div 
                key={index}
                onClick={() => handleSpecialityClick(item)} 
                className={`py-2.5 px-4 rounded-lg transition-all cursor-pointer flex items-center ${speciality === item ? 'bg-primary text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}
              >
                {speciality === item && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Doctor Cards */}
        <div className='flex-1'>
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filterDoc.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg">No doctors found</p>
              <button 
                onClick={() => navigate('/doctors')}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-all"
              >
                View All Doctors
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
              {filterDoc.map((item, index) => (
                <div 
                  onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                  className='border border-[#C9D8FF] rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-5px] transition-all duration-300 shadow-sm hover:shadow-md bg-white' 
                  key={index}
                >
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img 
                      className='w-full h-full object-cover bg-[#EAEFFF]' 
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
                    <p className='text-[#262626] text-base sm:text-lg font-medium mt-1 line-clamp-1'>{item.name}</p>
                    <p className='text-[#5C5C5C] text-xs sm:text-sm mt-1'>{item.speciality}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Doctors
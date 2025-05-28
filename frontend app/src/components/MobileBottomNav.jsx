// Create a new file: MobileBottomNav.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // Adjust path as needed

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, userData } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  
  // Check if current page is login page
  const isLoginPage = location.pathname === '/login';
  
  // Set active tab based on current path
  useEffect(() => {
    if (location.pathname === '/home') setActiveTab('home');
    else if (location.pathname === '/doctors') setActiveTab('doctors');
    else if (location.pathname === '/about') setActiveTab('about');
    else if (location.pathname === '/contact') setActiveTab('contact');
    else if (location.pathname === '/my-profile') setActiveTab('profile');
  }, [location.pathname]);
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Navigate based on tab
    if (tab === 'home') navigate('/home');
    else if (tab === 'doctors') navigate('/doctors');
    else if (tab === 'about') navigate('/about');
    else if (tab === 'contact') navigate('/contact');
    else if (tab === 'profile') {
      if (token && userData) {
        navigate('/my-profile');
      } else {
        navigate('/login');
      }
    }
  };
  
  // Don't render on login page
  if (isLoginPage) {
    return null;
  }
  
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 z-50 shadow-lg' style={{display: 'flex !important'}}>
      <div 
        onClick={() => handleTabChange('home')} 
        className={`flex flex-col items-center px-3 py-1 ${activeTab === 'home' ? 'text-primary' : 'text-gray-500'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </div>
      <div 
        onClick={() => handleTabChange('doctors')} 
        className={`flex flex-col items-center px-3 py-1 ${activeTab === 'doctors' ? 'text-primary' : 'text-gray-500'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs mt-1">Doctors</span>
      </div>
      <div 
        onClick={() => handleTabChange('about')} 
        className={`flex flex-col items-center px-3 py-1 ${activeTab === 'about' ? 'text-primary' : 'text-gray-500'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs mt-1">About</span>
      </div>
      <div 
        onClick={() => handleTabChange('contact')} 
        className={`flex flex-col items-center px-3 py-1 ${activeTab === 'contact' ? 'text-primary' : 'text-gray-500'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-xs mt-1">Contact</span>
      </div>
      <div 
        onClick={() => handleTabChange('profile')} 
        className={`flex flex-col items-center px-3 py-1 ${activeTab === 'profile' ? 'text-primary' : 'text-gray-500'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs mt-1">Profile</span>
      </div>
    </div>
  );
};

export default MobileBottomNav;
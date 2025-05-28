import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    // Function to update user profile data using API
    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return userData ? (
        <div className='w-full max-w-lg mx-auto flex flex-col gap-4 text-sm pt-5 px-4 pb-24 md:pb-10'>
            {/* Profile Image */}
            <div className="flex justify-center mb-2">
                {isEdit
                    ? <label htmlFor='image' className="block">
                        <div className='inline-block relative cursor-pointer'>
                            <img className='w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="Profile" />
                            <div className='w-10 h-10 flex items-center justify-center absolute bottom-0 right-0 bg-primary rounded-full'>
                                <img className='w-6 h-6' src={image ? '' : assets.upload_icon} alt="Upload" />
                            </div>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                    </label>
                    : <div className="text-center">
                        <img className='w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover mx-auto' src={userData.image} alt="Profile" />
                    </div>
                }
            </div>

            {/* Name */}
            <div className="text-center">
                {isEdit
                    ? <input 
                        className='bg-gray-50 text-2xl sm:text-3xl font-medium w-full max-w-60 p-2 rounded border text-center' 
                        type="text" 
                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                        value={userData.name} 
                      />
                    : <p className='font-medium text-2xl sm:text-3xl text-[#262626]'>{userData.name}</p>
                }
            </div>

            <hr className='bg-[#ADADAD] h-[1px] border-none my-2' />

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <p className='text-gray-600 font-medium text-base mb-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-4 text-[#363636]'>
                    <p className='font-medium'>Email:</p>
                    <p className='text-blue-500 break-all'>{userData.email}</p>
                    
                    <p className='font-medium'>Phone:</p>
                    {isEdit
                        ? <input 
                            className='bg-gray-50 w-full p-2 rounded border' 
                            type="tel" 
                            onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                            value={userData.phone} 
                          />
                        : <p className='text-blue-500'>{userData.phone}</p>
                    }
                    
                    <p className='font-medium'>Address:</p>
                    {isEdit
                        ? <div className="space-y-2">
                            <input 
                                className='bg-gray-50 w-full p-2 rounded border' 
                                type="text" 
                                placeholder="Address Line 1"
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} 
                                value={userData.address.line1} 
                            />
                            <input 
                                className='bg-gray-50 w-full p-2 rounded border' 
                                type="text" 
                                placeholder="Address Line 2"
                                onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} 
                                value={userData.address.line2} 
                            />
                        </div>
                        : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
                    }
                </div>
            </div>

            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow-sm p-4">
                <p className='text-gray-600 font-medium text-base mb-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-4 text-gray-600'>
                    <p className='font-medium'>Gender:</p>
                    {isEdit
                        ? <select 
                            className='bg-gray-50 w-full p-2 rounded border' 
                            onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} 
                            value={userData.gender} 
                          >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-500'>{userData.gender}</p>
                    }
                    
                    <p className='font-medium'>Birthday:</p>
                    {isEdit
                        ? <input 
                            className='bg-gray-50 w-full p-2 rounded border' 
                            type='date' 
                            onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} 
                            value={userData.dob} 
                          />
                        : <p className='text-gray-500'>{userData.dob}</p>
                    }
                </div>
            </div>

            {/* Action Button */}
            <div className='mt-6 flex justify-center'>
                {isEdit
                    ? <button 
                        onClick={updateUserProfileData} 
                        className='w-full sm:w-auto border border-primary px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all'
                      >
                        Save Changes
                      </button>
                    : <button 
                        onClick={() => setIsEdit(true)} 
                        className='w-full sm:w-auto border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all'
                      >
                        Edit Profile
                      </button>
                }
            </div>
        </div>
    ) : null
}

export default MyProfile
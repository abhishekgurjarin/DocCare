import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  const location = useLocation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred. Please try again.')
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [token])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={assets.logo} alt="DocCare Logo" className="w-40 sm:w-48" />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Selector */}
          <div className="flex border-b">
            <button 
              onClick={() => setState('Sign Up')} 
              className={`flex-1 py-3 text-center font-medium text-sm ${state === 'Sign Up' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            >
              Sign Up
            </button>
            <button 
              onClick={() => setState('Login')} 
              className={`flex-1 py-3 text-center font-medium text-sm ${state === 'Login' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            >
              Login
            </button>
          </div>
          
          {/* Form */}
          <form onSubmit={onSubmitHandler} className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              {state === 'Sign Up' ? 'Sign up to book appointments with trusted doctors' : 'Login to access your account'}
            </p>
            
            {state === 'Sign Up' && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="Enter your full name"
                  required 
                />
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                id="email"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="Enter your email"
                required 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                placeholder="Enter your password"
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary text-white py-3 rounded-lg font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary-dark transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : state === 'Sign Up' ? 'Create Account' : 'Login'}
            </button>
          </form>
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to DocCare's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Login
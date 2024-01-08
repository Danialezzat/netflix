import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {UserAuth} from '../context/AthContext'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth()



  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      await signUp(email, password)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='w-full h-full '>
        <img className='hidden sm:block absolute w-full sm:h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/94c5161a-3975-4977-80d9-158b78980cf2/IT-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-full'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form className='w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type="email"  placeholder='email...' autoComplete='email'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password...' autoComplete='current-password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>


                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox"/>Remember Me</p>
                  <p>Need Help?</p>
                </div>

                <p className='py-8'>
                  <span className='text-gray-600'>
                    Already subscribed to Netflix?
                  </span>{' '}
                  <Link to='/login'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
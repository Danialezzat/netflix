import React from 'react'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/94c5161a-3975-4977-80d9-158b78980cf2/IT-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold '>My Shows</h1>
      </div>
      </div>
    </>
  )
}

export default Account
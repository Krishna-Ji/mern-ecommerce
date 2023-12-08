import React from 'react'

const LoginSignup = () => {
  return (

    // loginsignup
    <div className=' w-full h-[80vh] bg-white pt-[100px]'>
      {/* loginsighup-container */}
      <div className=' w-[580px] h-[600px] bg-white m-auto pt-[40px] pb-[40px] pl-[60px] pr-[60px]'>
        <h1 className=' text-[32px] font-bold mt-[20px] mb-[20px] ml-0 mr-0'>Sign Up</h1>

        {/* loginsignup-field */}
        <div className=' flex flex-col gap-[29px] mt-[30px] '>
          <input className=' h-[72px] w-[100%] pl-6 text-[18px] outline-none border-none' type="text" placeholder='Enter Your Username' />
          <input className=' h-[72px] w-[100%] pl-6 text-[18px] outline-none border-none' type="email" placeholder='Enter your email' />
          <input className=' h-[72px] w-[100%] pl-6 text-[18px] outline-none border-none' type="password" placeholder='Enter Password' />
        </div>
        
        <button className=' w-[580px] h-[65px] text-white bg-red-500 mt-[30px] border-none text-[24px] font-[500]' type="button">Continue</button>

        {/*  */}
        <p className=' mt-[20px] text-gray-500 text-[18px] font-[500]'>Already have an account? <span className=' text-red-500 font-bold' >Login</span></p>
        {/* loginsignup-agree */}
        <div className=' flex items-center mt-[25px] gap-[20px] text-gray-500 '>
          <input type="checkbox"  name='' id=''/>
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
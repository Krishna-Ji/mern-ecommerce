import React from 'react'
import hand_icon from '../Assets/hand_icon.png' 
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className=' h-[100vh] bg-slate-300 flex'>
      {/* left */}
      <div className=' flex flex-1 flex-col justify-center gap-2 pl-[110px]'> 
        <h2 className=' font-bold text-[32px]'>Newly Updated Products</h2>
        <div className=' flex flex-col gap-2'>
          <div className='flex gap-8 items-center'>
            <p className=' font-bold text-red-500 text-[52px]'>New</p>
            <img className=' w-24' src={hand_icon} alt="" />
          </div>
          <p className=' font-bold text-[32px]'>Best Collection</p>
          <p className=' font-bold text-[32px] '>For Everyone</p>
        </div>
        {/* latest button */}

        <div className=' w-[250px] p-2 justify-center bg-red-600 text-white mt-4 flex items-center gap-2'>
          <div className=' font-bold'>New Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      {/* right */}
      <div className='flex justify-center items-center flex-1'>
      <img className=' w-[410px]' src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
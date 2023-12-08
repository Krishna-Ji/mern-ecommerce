import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className=' mt-10 m-auto bg-slate-200 w-[90%] h-[60vh] flex mt-auto pl-[140px] pr-[140px] mb-[150px]'>
      {/* left side */}
      <div className=' flex-1 flex flex-col justify-center'>
        <h1 className=' text-[52px] font-bold mb-4 '>Exclusive</h1>
        <h1 className=' text-[42px] font-bold mb-4'>Offers For You</h1>
        <p className=' text-[32px] font-bold mb-4'>All Time Best Sellers</p>
        <button className=' bg-red-700 w-[250px] h-[50px] text-white font-bold text[19px] mt-4 rounded-md'> Shop Now </button>
      </div>
      {/* right */}
      <div className=' items-center pt-[50px] flex-1 flex flex-col justify-center'>
      <img className=' w-[310px]' src={exclusive_image} alt="jk" />
      </div>
    </div>
  )
}

export default Offers
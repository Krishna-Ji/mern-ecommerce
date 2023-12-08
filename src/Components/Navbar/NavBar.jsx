import React, { useState } from 'react'
import logo from './../Assets/logo.png'
import { Link } from 'react-router-dom'
import cart_icon from './../Assets/cart_icon.png'

const NavBar = () => {
  const [menu, setmenu] = useState("Shop")

  return (
    <div className='flex gap-4 justify-around items-center p-2'>
      {/* logo */}
      <div className=' flex items-center gap-4'>
      <img src={logo} alt="" />
      <h1 className=' text-[32px] font-bold'>Shophere</h1>
      </div>
      <ul className=' mt-3 items-center flex flex-1 justify-evenly'>
        <li onClick={() => setmenu("Shop")} className=' font-bold text-[18px]' ><Link to="/">Shop</Link> {menu === "Shop" ? <hr className=' w-[42px] text-center h-[5px] bg-red-500' /> : <></> } </li>
        <li onClick={() => setmenu("Men")} className=' font-bold text-[18px]'><Link to="/Men">Mens</Link> {menu === "Men" ? <hr className=' w-[42px] text-center h-[5px] bg-red-500' /> : <></> } </li>
        <li onClick={() => setmenu("Women")} className=' font-bold text-[18px]' ><Link to="/Women">Womens</Link> {menu === "Women" ? <hr className=' w-[42px] text-center h-[5px] bg-red-500' /> : <></> } </li>
        <li onClick={() => setmenu("Kid")} className=' font-bold text-[18px]' ><Link to="/Kid">Kids</Link> {menu === "Kid" ? <hr className=' w-[42px] text-center h-[5px] bg-red-500' /> : <></> } </li>
      </ul>
      {/* login cart image */}
      <div className=' flex gap-8 items-center justify-center'>
        <Link to="/login"><button className=' mt-2 w-[120px] h-[40px] bg-red-500 text-white flex items-center justify-center font-bold'>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
      </div>
    </div>
  )
}

export default NavBar
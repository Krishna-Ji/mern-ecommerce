import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
   const {all_product,getTotalCartitem,cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
   
  return (
    // cartitems
    <div className=' mt-[100px] mb-[100px] ml-[170px] mr-[170px]'>
      {/* cartitems format main */}
      <div className=' grid  grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-[75px] pt-[20px] pb-[20px] pl-0 pr-0 text-gray-500 text-[18px] font-bold'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className=' h-1 bg-black border-0' />
      {all_product.map((e) => {
        if(cartItems[e.id]>0)
        {
            return <div>
            {/* cartitems format  */}
            <div className='  grid  grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-[75px] pt-[20px] pb-[20px] pl-0 pr-0 text-gray-500 text-[18px] font-bold'>
                <img className=' h-[62px]' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                {/* cartitems quantity */}
                <button>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      {/* cartitems-down */}
      <div className=' flex mt-[100px] mb-[100px] ml-0 mr-0'>
        {/* cartitems-total */}
        <div className=' flex-1 flex flex-col mr-[200px] gap-10'>
            <h1>Cart Totals</h1>
            <div>
                {/* cartitems-total items */}
                <div className=' flex justify-between pt-[15px] pb-[15px] pl-0 pr-0'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                {/* cartitem total item */}
                <div className=' flex justify-between pt-[15px] pb-[15px] pl-0 pr-0'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className=' flex justify-between pt-[15px] pb-[15px] pl-0 pr-0'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button className=' w-[262px] h-[58px] outline-none border-none bg-red-500 text-white text-[16px] font-bold cursor-pointer'>Proceed To Checkout</button>
        </div>
        {/* cartitems */}
        <div className=' flex-1 text-[16px] font-bold' > 
            <p className=' text-gray-500'>If you have a promo code, Enter it here</p>
            {/* cartitems-promobox */}
            <div className=' w-[504px mt-[15px] pl-[20px] h-[58px] bg-gray-300'>
                <input className=' border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]' type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitems
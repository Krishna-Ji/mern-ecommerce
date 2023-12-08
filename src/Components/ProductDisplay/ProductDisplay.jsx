import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png';
import start_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

  return (
    // prdouct display
    <div className=' justify-between flex mt-10 mb-0 ml-[100px] mr-[100px]'>
        {/* product display left */}
        <div className=' flex gap-[17px]'>
        {/* product display image list */}
        <div className=' flex flex-col gap-[16px]'>
            <img className=' w-auto h-auto' src={product.image} alt="" />
            <img className=' w-auto h-auto' src={product.image} alt="" />
            <img className=' w-auto h-auto' src={product.image} alt="" />
            <img className=' w-auto h-auto' src={product.image} alt="" />
        </div>
        {/* product display image */}
        <img className=' w-auto h-auto' src={product.image} alt="" />
        </div>
        {/* product display right */}
        <div className='  mt-0 mb-0 ml-[120px] mr-[70px] flex flex-col' >
       <h1 className=' text-gray-600 text-[30px] font-bold'>{product.name}</h1>
       {/* product display right star */}
       <div className=' flex items-center mt-[13px] gap-1 text-black text-[16px]'>
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={start_dull_icon} alt="" />
        <p>(122)</p>
       </div>
       {/* productdisplay right prices */}
       <div className=' flex mt-10 mb-10 ml-0 mr-0 gap-7 text-[24px] font-bold'>
       {/* right price old */}
       <div className=' text-gray-400 line-through'>
        ${product.old_price}
       </div>
       {/* product display right price new */}
       <div className=' text-red-500'>
        ${product.new_price}
       </div>
       </div>
       {/* right description */}
       <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla accusamus, eum ipsa sit mollitia doloremque velit, iusto neque iure, eaque dolore earum quibusdam id quia nostrum quisquam consequatur placeat quidem.

       </div>
       {/* product display right size */}
       <div>
        <h1 className=' mt-12 text-gray-500 text-[20px] font-bold'>Select Size</h1>
        {/* product dislplay right size */}
        <div className=' flex  mt-7 mb-7 ml-0 mr-0 gap-5'>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer'>S</div>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer'>M</div>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer' >M</div>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer'>L</div>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer'>XL</div>
          <div className=' pt-[18px] pb-[24px] bg-white border-white border-solid border-[1px] rounded-sm cursor-pointer'>XXl</div>
        </div>
       </div>
       <button onClick={() => {addToCart(product.id)}} className=' pt-5 pb-5 pl-10 pr-10 w-[200px] text-[16px] font-bold text-white bg-red-500 mb-10 border-none outline-none cursor-pointer'>ADD TO CART</button>
       <p className=' mt-2'><span className=' font-bold'>Category: </span>Women, T-shirt, Crop Top</p>
       <p className=' mt-2'><span className=' font-bold'>Tags: </span>Modern, Latest , New</p>
        </div>
    </div>
  )
}

export default ProductDisplay
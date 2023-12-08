import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className=' w-[300px] hover:transform scale-1 transition duration-150'>
    <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
    <p className='mt-2 mb-2 font-bold'>{props.name}</p>
    <div className='flex gap-5'>
        <div className=' text-gray-500 text-[18px] font-bold '>
            ${props.new_price}
        </div>
        <div className=' line-through text-gray-500 text-[18px]'>
            ${props.old_price}
        </div>
    </div>
    </div>
  )
}

export default Item
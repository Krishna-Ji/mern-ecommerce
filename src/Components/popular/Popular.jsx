import React from 'react'
import data_product from '../../Components/Assets/data'
import Item from '../item/Item'

const Popular = () => {
  return (
    <div className='flex flex-col mt-4 '>
        <h1 className=' mb-4 text-center text-[42px] font-bold justify-center'> Popular Items</h1>
        <hr className=' mb-2 w-full max-w-[300px] text-center ml-auto mr-auto h-[5px] bg-red-500' />
        <div className=' justify-center items-center flex gap-4 p-2'>
            {data_product.map((item, i) => {
                return <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular
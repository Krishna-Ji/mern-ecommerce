import React from 'react'
import data_product from '../Assets/data'
import Item from '../item/Item'

const RelatedProducts = () => {
  return (
    // related products
    <div className=' mt-[50px] flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-3xl font-bold'>Related Products</h1>
        <hr className=' w-full max-w-[300px] text-center ml-auto mr-auto h-[5px] bg-red-500' />
    {/* related products item */}
    <div className=' flex-wrap justify-center items-center mt-[50px] flex gap-7'>
        {data_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}

    </div>
    </div>
  )
}

export default RelatedProducts
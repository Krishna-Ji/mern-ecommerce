import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../item/Item'


const NewCollections = () => {
  return (
    <div>
        <h1 className=' text-[52px] font-bold text-center'>New Collections</h1>
        <hr className=' w-full max-w-[300px] text-center ml-auto mr-auto h-[5px] bg-red-500' />
        <div className=' mt-10 flex flex-wrap justify-center gap-2 p-2'>
        {new_collection.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
        </div>
    </div>
  )
}

export default NewCollections
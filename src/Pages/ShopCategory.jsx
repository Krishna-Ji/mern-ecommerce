import React from 'react'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/item/Item'

const ShopCategory = (props) => {
  return (
    // category
    <div>
      <img className=' w-[80%] block mt-6 mb-6 ml-auto mr-auto' src={props.banner} alt=""  />
      {/* shopcategory-indexsort */}
      <div>
        <p>
          <span>Seeing 1-12</span> out of 36 products
        </p>
        {/* shopcategory-sort */}
        <div>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      {/* shopcategory-product */}
      <div className='flex flex-wrap gap-2 p-2 mt-2 justify-center items-center'>
        {all_product.map((item,i) => {
          
          if(props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
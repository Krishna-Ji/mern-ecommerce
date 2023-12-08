import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getdefaultcart());
    
    const addToCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]> 0)
            {
                let iteminfo = all_product.find((product) => product.id === Number(item))
                totalAmount += iteminfo.new_price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartitem = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const contextValue = {all_product, getTotalCartAmount, cartItems, addToCart, removeFromCart, getTotalCartitem};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
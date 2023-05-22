import React, { createContext, useState } from 'react'

export const CartContext = createContext({})

const ContextProvider = (props) => {
    const [cartData , setCartData] = useState([]);

    const updateCart = (cartData) => {
        setCartData(s => [ ...s , cartData]);
    }
    const deleteCartItem = (cartData) => {
        setCartData(cartData);
    }
    return (
      <CartContext.Provider value={{cartData , updateCart, deleteCartItem}}>
        { props.children }
      </CartContext.Provider>
    )
}

export default ContextProvider;
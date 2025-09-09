import React, { createContext, useState } from 'react'
import all_product from '../data/all_product'

export const dataContext = createContext()

function getDefaultCart() {
  const cart = {}
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

const UserContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  function addToCart(itemId) {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  function removeFromCart(itemId) {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  function getTotalCartAmount() {
    let totalAmount = 0

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(product => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  function getTotalCartItems() {
    let totalItems = 0

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item]
      }
    }
    return totalItems
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  }

  return (
    <dataContext.Provider value={value}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext

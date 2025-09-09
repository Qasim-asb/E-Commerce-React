import React, { useContext, useState } from 'react'
import styles from './Cart.module.css'
import { dataContext } from '../../context/UserContext'
import all_product from '../../data/all_product';
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount, addToCart } = useContext(dataContext)
  const [promoCode, setPromoCode] = useState('')

  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0)

  if (totalItems === 0) {
    return (
      <div className={styles.empty_cart}>
        <TiDeleteOutline />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    )
  }

  return (
    <main>
      <div className={styles.cart_heading}>
        <h2>Shopping Cart</h2>
        <p>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className={styles.cart_header}>
        <span>Products</span>
        <span>Name</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Remove</span>
      </div>

      {all_product.map(e => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className={styles.cart_item}>
              <div className={styles.cart_image}>
                <img src={e.image} alt={e.name} />
              </div>
              <div className={styles.item_name}>{e.name}</div>
              <div className={styles.item_price}>${e.new_price}</div>
              <div className={styles.quantity_control}>
                <div className={styles.quantity_btn} onClick={() => removeFromCart(e.id)}>-</div>
                <div>{cartItems[e.id]}</div>
                <div
                  className={styles.quantity_btn}
                  onClick={() => addToCart(e.id)}
                >+</div>
              </div>
              <div className={styles.item_total}>${e.new_price * cartItems[e.id]}</div>
              <div
                className={styles.remove_btn}
                onClick={() => {
                  for (let i = 0; i < cartItems[e.id]; i++) {
                    removeFromCart(e.id)
                  }
                }}
              >
                <TiDeleteOutline />
              </div>
            </div>
          )
        }
        return null
      })}

      <div className={styles.summary}>
        <div className={styles.cart_totals}>
          <h3>Cart Totals</h3>
          <div className={styles.total_row}>
            <span>Subtotal</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <hr />
          <div className={styles.total_row}>
            <span>Shipping Fee</span>
            <span>Free</span>
          </div>
          <hr />
          <div className={styles.total_row}>
            <span>Total</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <hr />
          <button className={styles.checkout_Btn}>PROCEED TO CHECKOUT</button>
        </div>

        <div className={styles.promo_section}>
          <p>If you have a promo code, Enter here</p>
          <form className={styles.promo_form}>
            <input
              type="text"
              placeholder='Promo code'
              className={styles.promo_input}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Cart

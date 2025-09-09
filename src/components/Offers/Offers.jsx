import React from 'react'
import styles from './Offers.module.css'
import exclusive from '../../assets/exclu.webp'

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offers_content}>
        <h3>Exclusive</h3>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className={styles.offers_btn}>Check Now</button>
      </div>

      <div className={styles.offers_image}>
        <img src={exclusive} alt="Exclusive offer" />
      </div>
    </section>
  )
}

export default Offers
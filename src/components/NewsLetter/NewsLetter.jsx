import React from 'react'
import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay updated</p>
      <form className={styles.subscribe_form}>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter
import React from 'react'
import styles from './Hero.module.css'
import { PiHandWavingLight } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";
import women from '../../assets/p8.webp'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h2>Best Deals! Best Prices!</h2>
        <div className={styles.new_badge}>
          <span>New</span>
          <PiHandWavingLight />
        </div>
        <p>COLLECTIONS</p>
        <p>FOR EVERYONE</p>

        <button className={styles.cta_btn}>
          Latest Collection
          <FaLongArrowAltRight />
        </button>
      </div>

      <div className={styles.hero_image}>
        <img src={women} alt="Fashionable man" />
      </div>
    </section>
  )
}

export default Hero
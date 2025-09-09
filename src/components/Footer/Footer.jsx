import React from 'react'
import styles from './Footer.module.css'
import { SiShopify } from "react-icons/si";
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <div className={styles.brand}>
            <SiShopify />
            <span>Shopify</span>
          </div>

          <ul className={styles.menu}>
            <li>About</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>

          <div className={styles.social_icons}>
            <div className={styles.social_icon}>
              <FaInstagramSquare />
            </div>
            <div className={styles.social_icon}>
              <FaFacebook />
            </div>
            <div className={styles.social_icon}>
              <FaWhatsappSquare />
            </div>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
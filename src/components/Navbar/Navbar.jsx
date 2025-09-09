import React, { useContext } from 'react'
import styles from './Navbar.module.css'
import { SiShopify } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { dataContext } from '../../context/UserContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(dataContext)

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <Link to='./' className={styles.logo}>
          <SiShopify />
          <h1>Shopify</h1>
        </Link>

        <ul className={styles.nav_menu}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/men'>Men</Link></li>
          <li><Link to='/women'>Women</Link></li>
          <li><Link to='/kids'>Kids</Link></li>
        </ul>

        <div className={styles.nav_actions}>
          <Link to='/login' className={styles.login_btn}>Login</Link>
          <Link to='/cart' className={styles.cart_btn}>
            <TiShoppingCart />
            <span className={styles.cart_count}>{getTotalCartItems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ image, name, new_price, old_price, id }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image_container}>
        <Link to={`/product/${id}`}><img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={image} alt={name} /></Link>
      </div>

      <div className={styles.item_info}>
        <p className={styles.item_name}>{name}</p>
        <div className={styles.price_container}>
          <div className={styles.new_price}>
            ${new_price}
          </div>
          <div className={styles.old_price}>
            ${old_price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

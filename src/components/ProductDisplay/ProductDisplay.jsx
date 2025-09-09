import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import { dataContext } from '../../context/UserContext'

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(dataContext)

  return (
    <div className={styles.product_display}>
      <div className={styles.images}>
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
      </div>

      <div>
        <h2>{product.name}</h2>
        <div className={styles.stars}>
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <span>130</span>
        </div>
        <div>
          <div className={styles.old_price}>${product.old_price}</div>
          <div className={styles.new_price}>${product.new_price}</div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at voluptate hic voluptas architecto qui itaque, placeat necessitatibus et tempore aut fugit enim perferendis culpa corporis odio illo voluptatem aliquid.
          </p>
          <div className={styles.size}>
            <div className={styles.select_size}>Select Size</div>
            <div className={styles.display_size}>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <div className={styles.display_category}>
            <span>Category:<span>Women, T-Shirt, Crop Top</span></span>
          </div>
          <div className={styles.display_category}>
            <span>Tags:<span>Modern, Latest, Trend Shorts</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay

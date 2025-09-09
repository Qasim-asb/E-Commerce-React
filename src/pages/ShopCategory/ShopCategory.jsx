import React from 'react'
import styles from './ShopCategory.module.css'
import sharedStyles from '../../components/sharedStyles.module.css'
import all_product from '../../data/all_product';
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../../components/Item/Item';

const ShopCategory = (props) => {
  return (
    <main className={styles.shop_category}>
      <div className={styles.banner}>
        <img src={props.banner} alt="" />
      </div>

      <div className={styles.filters}>
        <p className={styles.product_count}>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles.sort_filter}>
          Sort by <RiArrowDropDownLine />
        </div>
      </div>

      <div className={sharedStyles.products_grid}>
        {all_product.map((item, i) => (
          props.category === item.category && <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
        ))}
      </div>

      <button className={sharedStyles.btn}>Explore More</button>
    </main>
  )
}

export default ShopCategory
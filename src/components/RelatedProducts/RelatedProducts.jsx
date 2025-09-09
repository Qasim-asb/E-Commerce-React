import React from 'react'
import styles from './RelatedProducts.module.css'
import sharedStyles from '../sharedStyles.module.css'
import all_product from '../../data/all_product'
import Item from '../Item/Item'

const RelatedProducts = ({ product }) => {
  return (
    <div className={styles.related_products}>
      <div className={sharedStyles.section_header}>
        <h2 className={sharedStyles.section_title}>Related Products</h2>
        <div className={sharedStyles.divider}></div>
      </div>

      <div className={sharedStyles.products_grid}>
        {all_product.map((item, i) => (
          product.category === item.category && <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts

import React from 'react'
import sharedStyles from '../sharedStyles.module.css'
import data_product from '../../data/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <section>
      <div className={sharedStyles.section_header}>
        <h2 className={sharedStyles.section_title}>POPULAR IN WOMEN</h2>
        <div className={sharedStyles.divider}></div>
      </div>
      <div className={sharedStyles.products_grid}>
        {data_product.map((item, i) => (
          <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
        ))}
      </div>
    </section>
  )
}

export default Popular
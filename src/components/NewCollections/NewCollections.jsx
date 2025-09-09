import React from 'react'
import sharedStyles from '../sharedStyles.module.css'
import new_collections from '../../data/newCollections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <section>
      <div className={sharedStyles.section_header}>
        <h2 className={sharedStyles.section_title}>NEW COLLECTIONS</h2>
        <div className={sharedStyles.divider}></div>
      </div>
      <div className={sharedStyles.products_grid}>
        {new_collections.map((item, i) => (
          <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} id={item.id} />
        ))}
      </div>

      <button className={sharedStyles.btn}>View All Collections</button>
    </section>
  )
}

export default NewCollections
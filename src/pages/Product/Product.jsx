import React from 'react'
import styles from './Product.module.css'
import { useParams, Link } from 'react-router-dom'
import all_product from '../../data/all_product'
import BredCrums from '../../components/BredCrums/BredCrums'
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'
import Description from '../../components/Description/Description'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
import { FaSearch } from 'react-icons/fa'

const Product = () => {
  const { id } = useParams()
  const product = id ? all_product.find(e => e.id === Number(id)) : null

  if (!product) {
    return (
      <main className={styles.product}>
        <FaSearch />
        <h4 className={styles.heading}>Product Not Found</h4>
        <p className={styles.para}>The product you're looking for doesn't exist or may have been moved.</p>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </main>
    )
  }

  return (
    <main className={styles.product}>
      <BredCrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts product={product} />
    </main>
  )
}

export default Product
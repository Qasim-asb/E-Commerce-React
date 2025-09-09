import React from 'react'
import styles from './Shop.module.css'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/Offers/Offers'
import NewCollections from '../../components/NewCollections/NewCollections'
import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <main className={styles.shop}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </main>
  )
}

export default Shop

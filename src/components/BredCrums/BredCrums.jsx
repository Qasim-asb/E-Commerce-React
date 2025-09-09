import React from 'react'
import styles from './BredCrums.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const BredCrums = ({ product }) => {
  return (
    <div className={styles.bredCrums}>
      Home <FaLongArrowAltRight /> Shop <FaLongArrowAltRight /> {product.category} <FaLongArrowAltRight /> {product.name}
    </div>
  )
}

export default BredCrums


import React from 'react'
import AddToCard from '../addToCard/AddToCard'
import styles from './ProductCard.module.css'
import RemoveCard from '../removeFromCard-Tailwind/RemoveCard'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>This is prodect card</h1>
     <AddToCard />
     <RemoveCard />
    </div>
  )
}

export default ProductCard

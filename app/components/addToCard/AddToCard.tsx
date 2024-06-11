'use client';
import React from 'react'
import styles from './AddToCard.module.css'

const AddToCard = () => {
  return (
    <div>
       <button className={styles.card} onClick={()=> console.log("added to card")}>add to card</button>
    </div>
  )
}

export default AddToCard

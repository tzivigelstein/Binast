import React from 'react'
import styles from './crypto-chip-skeleton.module.css'
import SkeletonElement from './SkeletonElement'

const CryptoChipSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagePriceContainer}>
        <SkeletonElement type="roundThumb" />
        <SkeletonElement type="title" />
      </div>
      <SkeletonElement style={{ width: '4rem' }} type="title" />
    </div>
  )
}

export default CryptoChipSkeleton

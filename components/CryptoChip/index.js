import {} from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from '../Icons'

const CryptoChip = ({ data }) => {
  const { imageUrl, name, price, up, id } = data

  const url = `https://cryptocompare.com/${imageUrl}`

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image height={42} width={42} src={url} alt={`${name} | ${id}`} />
      </div>
      <div className={styles.nameInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.id}>{id}</span>
      </div>
      <div className={styles.priceInfo}>
        <span className={styles.price}>{price}</span>
        <span className={styles.price}>
          {up ? <ChevronUp className={styles.chevronUp} /> : <ChevronDown className={styles.chevronDown} />}
        </span>
      </div>
    </div>
  )
}

export default CryptoChip

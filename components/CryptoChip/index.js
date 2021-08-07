import {} from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from '../Icons'
import useCrypto from '../../hooks/useCrypto'

const CryptoChip = ({ data }) => {
  const { imageUrl, name, price, up, id } = data

  const { setSelectedCrypto } = useCrypto()

  const url = `https://cryptocompare.com/${imageUrl}`

  const handleClick = e => {
    e.preventDefault()

    setSelectedCrypto(id)
  }

  return (
    <button onClick={handleClick} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image height={42} width={42} src={url} alt={`${name} | ${id}`} />
      </div>
      <div className={styles.nameInfo}>
        <p translate="no" className={styles.name}>
          {name}
        </p>
        <span translate="no" className={styles.id}>{id}</span>
      </div>
      <div className={styles.priceInfo}>
        <span className={styles.price}>{price}</span>
        <span className={styles.price}>
          {up ? <ChevronUp className={styles.chevronUp} /> : <ChevronDown className={styles.chevronDown} />}
        </span>
      </div>
    </button>
  )
}

export default CryptoChip

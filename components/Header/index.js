import { useState } from 'react'
import { ChevronDown, ChevronUp } from '../Icons'
import SearchBar from '../SearchBar'
import styles from './index.module.css'
import Image from 'next/image'
import useCrypto from '../../hooks/useCrypto'

const Header = () => {
  const { cryptos } = useCrypto()
  const headerCrypto = (cryptos && cryptos[0]) || {}
  const { id, name, imageUrl, price, volumeHour, changeDay, lowDay, highDay, openDay, marketCapital } = headerCrypto

  return (
    <header className={styles.header}>
      <div className={styles.headerFilter}>
        <div className={styles.headingContainer}>
          <div className={styles.main}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Image height={42} width={42} src={`https://cryptocompare.com/${imageUrl}`} alt={`${name} - ${id}`} />
              </div>
              <span className={styles.shortName}>{id}</span>
            </div>
            <span className={styles.price}>{price}</span>
            <div className={styles.highLowContainer}>
              <div className={styles.highPriceContainer}>
                <ChevronUp className={styles.highPriceIcon} />
                <span className={styles.highPrice}>{highDay}</span>
              </div>
              <div className={styles.lowPriceContainer}>
                <ChevronDown className={styles.lowPriceIcon} />
                <span className={styles.lowPrice}>{lowDay}</span>
              </div>
            </div>
          </div>
          <div className={styles.detailContainer}>
            <label className={styles.label}>Open day</label>
            <span className={styles.value}>{openDay}</span>
            <label className={styles.label}>Volume hour</label>
            <span className={styles.value}>{volumeHour}</span>
            <label className={styles.label}>Market capital</label>
            <span className={styles.value}>{marketCapital}</span>
            <label className={styles.label}>Change day</label>
            <span className={styles.value}>{changeDay}</span>
          </div>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
    </header>
  )
}

export default Header

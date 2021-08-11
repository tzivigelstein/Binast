import { ChevronDown, ChevronUp } from '../Icons'
import SearchBar from '../SearchBar'
import styles from './index.module.css'
import Image from 'next/image'
import useCrypto from '../../hooks/useCrypto'
import { imagePlaceholder } from '../../helpers/imagePlaceholder'

const Header = () => {
  const { selectedCrypto } = useCrypto()
  const { id, name, imageUrl, price, volumeHour, changeDay, lowDay, highDay, openDay, marketCapital } = selectedCrypto

  return (
    <header className={styles.header}>
      <span role="img" aria-label="Electronic circuit - Header"></span>
      <div className={styles.headerFilter}>
        <div className={styles.headingContainer}>
          <div className={styles.main}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                {/* <ImageLoader /> */}
                <Image
                  placeholder="blur"
                  blurDataURL={imagePlaceholder}
                  height={42}
                  width={42}
                  src={`https://cryptocompare.com/${imageUrl}`}
                  alt={`${name} - ${id}`}
                />
              </div>
              <span translate="no" className={styles.shortName}>
                {id}
              </span>
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
            <div className={styles.valueContainer}>
              <label className={styles.label}>Open day</label>
              <span className={styles.value}>{openDay}</span>
            </div>
            <div className={styles.valueContainer}>
              <label className={styles.label}>Volume hour</label>
              <span className={styles.value}>{volumeHour}</span>
            </div>
            <div className={styles.valueContainer}>
              <label className={styles.label}>Market capital</label>
              <span className={styles.value}>{marketCapital}</span>
            </div>
            <div className={styles.valueContainer}>
              <label className={styles.label}>Change day</label>
              <span className={styles.value}>{changeDay}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.searchBarContainer}><SearchBar /></div> */}
    </header>
  )
}

export default Header

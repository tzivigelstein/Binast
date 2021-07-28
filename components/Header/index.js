import { ChevronDown, ChevronUp } from '../Icons'
import SearchBar from '../SearchBar'
import styles from './index.module.css'
import Image from 'next/image'

const Header = () => {
  const price = 32539.62
  const high = 32704
  const low = 31823

  const openDay = 39492.8
  const volumeHour = 1270.42
  const marketCapital = 763.11
  const changeDay = 2.95 / 100

  const parsedPrice = `$ ${price.toLocaleString()}`
  const parsedHighPrice = high.toLocaleString()
  const parsedLowPrice = low.toLocaleString()

  const parsedOpenDay = `$ ${openDay.toLocaleString()}`
  const parsedVolumeHour = `Ƀ ${volumeHour.toLocaleString()}`
  const parsedMarketCapital = `$ ${marketCapital.toLocaleString()} B`
  const parsedChangeDay = changeDay.toLocaleString([], { style: 'percent', minimumFractionDigits: 2 })

  return (
    <header className={styles.header}>
      <div className={styles.headerFilter}>
        <div className={styles.headingContainer}>
          <div className={styles.main}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <Image
                  height={42}
                  width={42}
                  src="https://cryptocompare.com/media/37746251/btc.png"
                  alt="Bitcoin logo"
                />
              </div>
              <span className={styles.shortName}>BTC</span>
            </div>
            <span className={styles.price}>{parsedPrice}</span>
            <div className={styles.highLowContainer}>
              <div className={styles.highPriceContainer}>
                <ChevronUp className={styles.highPriceIcon} />
                <span className={styles.highPrice}>{parsedHighPrice}</span>
              </div>
              <div className={styles.lowPriceContainer}>
                <ChevronDown className={styles.lowPriceIcon} />
                <span className={styles.lowPrice}>{parsedLowPrice}</span>
              </div>
            </div>
          </div>
          <div className={styles.detailContainer}>
            <label className={styles.label}>Open day</label>
            <span className={styles.value}>{parsedOpenDay}</span>
            <label className={styles.label}>Volume hour</label>
            <span className={styles.value}>{parsedVolumeHour}</span>
            <label className={styles.label}>Market capital</label>
            <span className={styles.value}>{parsedMarketCapital}</span>
            <label className={styles.label}>Change day</label>
            <span className={styles.value}>{parsedChangeDay}</span>
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

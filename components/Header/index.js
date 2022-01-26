import styles from './index.module.css'
import CryptoJumbo from '../CryptoJumbo'
import SearchBar from '../SearchBar'

const Header = () => {
  return (
    <header className={styles.header}>
      <span role="img" aria-label="Electronic circuit - Header"></span>
      <div className={styles.headerFilter}>
        <CryptoJumbo />
        <div className={styles.searchBarContainer}>
          <SearchBar />
        </div>
      </div>
    </header>
  )
}

export default Header

import { useState } from 'react'
import styles from './index.module.css'
import { ChevronDown, ChevronUp, Search } from '../Icons'

const SearchBar = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const handleSelectClick = () => {
    setIsSelectOpen(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <Search className={styles.icon} />
      <input className={styles.input} placeholder="Search" type="text" />
      <div className={styles.selectContainer}>
        <select translate="no" onClick={handleSelectClick} className={styles.select} defaultValue="USD" name="" id="">
          <option value="USD">USD</option>
          <option value="ARS">ARS</option>
          <option value="EUR">EUR</option>
          <option value="GDP">GDP</option>
        </select>
        {isSelectOpen ? <ChevronUp className={styles.chevron} /> : <ChevronDown className={styles.chevron} />}
      </div>
    </div>
  )
}

export default SearchBar

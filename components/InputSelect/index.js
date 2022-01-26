import styles from './index.module.css'
import { ChevronDown, ChevronUp } from '../Icons'
import { useState } from 'react'

export default function InputSelect({ setSelectedCurrency }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const handleSelectChange = e => {
    setSelectedCurrency(e.target.value)

    handleSearch(e)
  }

  const handleSelectClick = () => {
    setIsSelectOpen(prev => !prev)
  }

  return (
    <div className={styles.selectContainer}>
      <select
        translate="no"
        onChange={handleSelectChange}
        onClick={handleSelectClick}
        className={styles.select}
        defaultValue="USD"
        name="currency"
        id="currency"
      >
        <option value="USD">USD</option>
        <option value="ARS">ARS</option>
        <option value="EUR">EUR</option>
        <option value="GDP">GDP</option>
      </select>
      {isSelectOpen ? <ChevronUp className={styles.chevron} /> : <ChevronDown className={styles.chevron} />}
    </div>
  )
}

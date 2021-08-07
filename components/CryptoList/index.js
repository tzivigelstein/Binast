import { useEffect } from 'react'
import styles from './index.module.css'
import CryptoChip from '../CryptoChip'
import useCrypto from '../../hooks/useCrypto'

const CryptoList = () => {
  const { cryptos, selectedCrypto } = useCrypto()

  const filterCryptosBySelected = ({ id }) => id !== selectedCrypto.id

  return (
    <ul className={styles.list}>
      {cryptos && cryptos.filter(filterCryptosBySelected).map(crypto => <CryptoChip key={crypto.id} data={crypto} />)}
    </ul>
  )
}

export default CryptoList

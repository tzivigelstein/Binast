import {} from 'react'
import styles from './index.module.css'
import CryptoChip from '../CryptoChip'
import useCrypto from '../../hooks/useCrypto'

const CryptoList = () => {
  const { cryptos } = useCrypto()

  return (
    <ul className={styles.list}>
      {cryptos && cryptos.slice(1).map(crypto => <CryptoChip key={crypto.id} data={crypto} />)}
    </ul>
  )
}

export default CryptoList

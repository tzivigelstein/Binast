import styles from './index.module.css'
import CryptoChip from '../CryptoChip'
import useCrypto from '../../hooks/useCrypto'
import CryptoChipSkeleton from '../Skeletons/CryptoChipSkeleton'

const CryptoList = () => {
  const { cryptos, selectedCrypto, loading } = useCrypto()

  const filterCryptosBySelected = ({ id }) => id !== selectedCrypto.id

  return (
    <ul className={styles.list}>
      {loading && (
        <>
          <CryptoChipSkeleton />
          <CryptoChipSkeleton />
          <CryptoChipSkeleton />
          <CryptoChipSkeleton />
          <CryptoChipSkeleton />
        </>
      )}
      {cryptos && cryptos.filter(filterCryptosBySelected).map(crypto => <CryptoChip key={crypto.id} data={crypto} />)}
    </ul>
  )
}

export default CryptoList

import { useContext } from 'react'
import { cryptoContext } from '../context/cryptoContext'

const useCrypto = () => useContext(cryptoContext)

export default useCrypto

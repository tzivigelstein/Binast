import { useEffect, useReducer } from 'react'
import CryptoContext from './cryptoContext'
import cryptoReducer from './cryptoReducer'
import parseCryptos from '../helpers/parseCryptos'
import { GET_CRYPTOS_SUCCESS, SET_SELECTED_CRYPTO } from './types'

const DEFAULT_CURRENCY = 'USD'
const DEFAULT_SELECTED_CRYPTO = {}

const CryptoState = ({ children }) => {
  const initialState = {
    cryptos: null,
    loading: false,
    selectedCrypto: DEFAULT_SELECTED_CRYPTO,
  }

  const [state, dispatch] = useReducer(cryptoReducer, initialState)

  useEffect(() => {
    getMostCapitalizedCryptos(10)
  }, [])

  const getMostCapitalizedCryptos = async (limit, currency = DEFAULT_CURRENCY) => {
    try {
      const query = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=${currency}`)
      if (await query.ok) {
        const data = await query.json()
        const parsedData = parseCryptos(data.Data)
        dispatch({
          type: GET_CRYPTOS_SUCCESS,
          payload: parsedData,
        })
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const setSelectedCrypto = cryptoID => {
    const selectedCrypto = state.cryptos.find(({ id }) => id === cryptoID)

    dispatch({
      type: SET_SELECTED_CRYPTO,
      payload: selectedCrypto,
    })
  }

  return (
    <CryptoContext.Provider
      value={{
        cryptos: state.cryptos,
        loading: state.loading,
        selectedCrypto: state.selectedCrypto,
        getMostCapitalizedCryptos,
        setSelectedCrypto,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export default CryptoState

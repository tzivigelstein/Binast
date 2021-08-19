import { useEffect, useReducer } from 'react'
import CryptoContext from './cryptoContext'
import cryptoReducer from './cryptoReducer'
import parseCryptos from '../helpers/parseCryptos'
import { GET_CRYPTOS_SUCCESS, SET_SELECTED_CRYPTO, LOADING, SET_ERROR } from './types'

const DEFAULT_CURRENCY = 'USD'
const DEFAULT_SELECTED_CRYPTO = {}

const CryptoState = ({ children }) => {
  const initialState = {
    cryptos: null,
    loading: false,
    selectedCrypto: DEFAULT_SELECTED_CRYPTO,
    error: null,
  }

  const [state, dispatch] = useReducer(cryptoReducer, initialState)

  useEffect(() => {
    getMostCapitalizedCryptos(10)
  }, [])

  const getMostCapitalizedCryptos = async (limit, currency = DEFAULT_CURRENCY) => {
    dispatch({
      type: SET_ERROR,
      payload: null,
    })
    dispatch({
      type: LOADING,
    })
    try {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=${currency}`

      const query = await fetch(url)
      if (await query.ok) {
        const data = await query.json()
        const parsedData = parseCryptos(data.Data)

        dispatch({
          type: GET_CRYPTOS_SUCCESS,
          payload: parsedData,
        })
      } else {
        dispatch({
          type: GET_CRYPTOS_ERROR,
          payload: 'Something went wrong',
        })
      }
    } catch (error) {
      console.error(error)
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      })
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
        error: state.error,
        getMostCapitalizedCryptos,
        setSelectedCrypto,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}

export default CryptoState

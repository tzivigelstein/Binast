import { LOADING, GET_CRYPTOS_SUCCESS, GET_CRYPTOS_ERROR, SET_SELECTED_CRYPTO } from './types'

const cryptoReducer = (state, { type, payload }) => {
  const cryptoTypes = {
    [LOADING]: {
      ...state,
      loading: true,
    },

    [GET_CRYPTOS_SUCCESS]: {
      ...state,
      cryptos: payload,
      loading: false,
      selectedCrypto: payload && payload[0],
    },

    [GET_CRYPTOS_ERROR]: {
      ...state,
      loading: false,
      error: payload,
    },

    [SET_SELECTED_CRYPTO]: {
      ...state,
      selectedCrypto: payload,
    },
  }

  return cryptoTypes[type] || { ...state }
}

export default cryptoReducer

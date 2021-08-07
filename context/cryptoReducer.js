import { LOADING, GET_CRYPTOS_SUCCESS, SET_SELECTED_CRYPTO } from './types'

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
      selectedCrypto: payload[0],
    },

    [SET_SELECTED_CRYPTO]: {
      ...state,
      selectedCrypto: payload,
    },
  }

  return cryptoTypes[type] || { ...state }
}

export default cryptoReducer

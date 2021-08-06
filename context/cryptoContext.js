import React, { useState, createContext, useEffect } from 'react'
import millify from 'millify'

export const cryptoContext = createContext()

const url = ''

export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState(null)

  useEffect(async () => {
    //Minimum 10 - API rule

    getMostTradedCryptos(10)
  }, [])

  async function getMostTradedCryptos(limit, currency = 'USD') {
    try {
      const query = await fetch(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=${currency}`)
      if (await query.ok) {
        const data = await query.json()
        const parsedData = parseData(data.Data)
        setCryptos(parsedData)
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      console.error(error)
    }
  }

  function parseData(cryptos) {
    const parsedCryptos = cryptos.map(({ RAW, CoinInfo }) => {
      const {
        USD: { IMAGEURL, PRICE, MKTCAP, CHANGEPCTDAY, OPENDAY, VOLUMEHOUR, LOWDAY, HIGHDAY },
      } = RAW

      const { Name, FullName } = CoinInfo

      return {
        imageUrl: IMAGEURL.slice(1),
        price: `$ ${PRICE.toLocaleString()}`,
        marketCapitall: MKTCAP.toLocaleString([], { maximumSignificantDigits: 1 }),
        marketCapital: `$ ${millify(MKTCAP, { precision: 2, space: true })}`,
        changeDay: (CHANGEPCTDAY / 100).toLocaleString([], { style: 'percent', minimumFractionDigits: 2 }),
        openDay: `$ ${OPENDAY.toLocaleString()}`,
        volumeHour: `Ƀ ${VOLUMEHOUR.toLocaleString()}`,
        up: PRICE > OPENDAY,
        highDay: `$ ${HIGHDAY.toLocaleString([], { maximumFractionDigits: 0 })}`,
        lowDay: `$ ${LOWDAY.toLocaleString([], { maximumFractionDigits: 0 })}`,
        name: FullName,
        id: Name,
      }
    })
    return parsedCryptos
  }

  return <cryptoContext.Provider value={{ cryptos }}>{children}</cryptoContext.Provider>
}

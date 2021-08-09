import millify from 'millify'

export default function parseCryptos(cryptos) {
  const parsedCryptos = cryptos.map(({ RAW, CoinInfo, DISPLAY }) => {
    const {
      USD: { IMAGEURL, PRICE, MKTCAP, CHANGEPCTDAY, OPENDAY, VOLUMEHOUR, LOWDAY, HIGHDAY },
    } = RAW

    const { Name, FullName } = CoinInfo

    const {
      USD: { FROMSYMBOL },
    } = DISPLAY

    return {
      imageUrl: IMAGEURL.slice(1),
      price: `$ ${PRICE.toLocaleString()}`,
      marketCapital: `$ ${millify(MKTCAP, { precision: 2, space: true })}`,
      changeDay: (CHANGEPCTDAY / 100).toLocaleString([], { style: 'percent', minimumFractionDigits: 2 }),
      openDay: `$ ${OPENDAY.toLocaleString()}`,
      volumeHour: `${FROMSYMBOL} ${millify(VOLUMEHOUR, { precision: 2, space: true })}`,
      up: PRICE > OPENDAY,
      highDay: `$ ${HIGHDAY.toLocaleString([], { maximumFractionDigits: HIGHDAY < 10 ? 2 : 0 })}`,
      lowDay: `$ ${LOWDAY.toLocaleString([], { maximumFractionDigits: LOWDAY < 10 ? 2 : 0 })}`,
      name: FullName,
      id: Name,
    }
  })

  return parsedCryptos
}

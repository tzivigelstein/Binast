import millify from 'millify'

export default function parseCryptos(cryptos) {
  const parsedCryptos = cryptos.map(parseData)

  return parsedCryptos
}

// Parses a coin from CoinGecko's /coins/markets. Every figure is a rolling 24h value.
export const parseData = coin => {
  const price = coin.current_price ?? 0
  const change = coin.price_change_24h ?? 0
  const high = coin.high_24h ?? price
  const low = coin.low_24h ?? price
  const open = price - change
  const symbol = coin.symbol.toUpperCase()

  return {
    imageUrl: coin.image,
    price: `$ ${price.toLocaleString()}`,
    marketCapital: `$ ${millify(coin.market_cap ?? 0, { precision: 2, space: true })}`,
    changeDay: ((coin.price_change_percentage_24h ?? 0) / 100).toLocaleString([], {
      style: 'percent',
      minimumFractionDigits: 2
    }),
    openDay: `$ ${open.toLocaleString()}`,
    volumeDay: `$ ${millify(coin.total_volume ?? 0, { precision: 2, space: true })}`,
    up: change > 0,
    highDay: `${high.toLocaleString([], { maximumFractionDigits: high < 10 ? 2 : 0 })}`,
    lowDay: `${low.toLocaleString([], { maximumFractionDigits: low < 10 ? 2 : 0 })}`,
    name: coin.name || symbol,
    id: symbol
  }
}

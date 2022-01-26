import { useState, useMemo } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Search } from '../Icons'
import debounce from '../../helpers/debounce'
import Spinner from '../Spinner'
import useCrypto from '../../hooks/useCrypto'
import { parseData } from '../../helpers/parseCryptos'
import InputSelect from '../InputSelect'

const SEARCH_AFTER_500_MS = 500

const SearchBar = () => {
  const { setSelectedCrypto } = useCrypto()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [search, setSearch] = useState('')

  async function handleSearch({ value }) {
    setLoading(true)

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${value}&tsyms=${selectedCurrency}`

    await fetch(url)
      .then(response => response.json())
      .then(response => {
        const { RAW: rawData, Response: error } = response

        if (error === 'Error') throw new Error("Couldn't find crypto 🤔")

        const data = Object.values(rawData)[0]
        setData(() => parseData({ RAW: data }))
      })
      .finally(() => setLoading(false))
      .catch(error => {
        setError(error)
        console.error(error.message)
      })
  }

  const debounced = useMemo(() => debounce(handleSearch, SEARCH_AFTER_500_MS), [selectedCurrency])

  const handleInputChange = ({ target: { value } }) => {
    setError(null)

    const parsedValue = value.trim().toUpperCase()

    setSearch(parsedValue)
    if (parsedValue === '') return
    debounced({ value: parsedValue })
  }

  function handleResultClick() {
    setSelectedCrypto(data)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Search className={styles.icon} />
          <input
            onChange={handleInputChange}
            value={search}
            className={styles.input}
            placeholder="Search Ticker"
            type="text"
          />
          {/* <InputSelect setSelectedCurrency={setSelectedCurrency} /> */}
        </div>

        <div className={styles.resultsList}>
          <p className={styles.resultsForHelper}>Results for {`"${search}"`}</p>
          {loading && <Spinner />}
          {error && <p>{error?.message || 'Error'}</p>}
          {data && !loading && !error && (
            <button onClick={handleResultClick} className={styles.result}>
              <div className={styles.coinDataContainer}>
                <Image width={32} height={32} src={`https://cryptocompare.com/${data.imageUrl}`} />
                <span>{data.id}</span>
              </div>
              <p>{data.price}</p>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default SearchBar

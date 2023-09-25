import { useState, useMemo } from "react"
import styles from "./index.module.css"
import Image from "next/image"
import { Search } from "@components/Icons"
import debounce from "@helpers/debounce"
import Spinner from "@components/Spinner"
import useCrypto from "@hooks/useCrypto"
import { parseData } from "@helpers/parseCryptos"

const SEARCH_AFTER_500_MS = 500

const SearchBar = () => {
  const { setSelectedCrypto } = useCrypto()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [focus, setFocus] = useState(false)

  const [search, setSearch] = useState("")

  async function handleSearch({ value }) {
    setLoading(true)

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${value}&tsyms=USD`

    await fetch(url)
      .then(response => response.json())
      .then(response => {
        const { RAW: rawData, Response: error } = response

        if (error === "Error") throw new Error("Couldn't find crypto 🤔")

        const data = Object.values(rawData)[0]
        setData(() => parseData({ RAW: data }))
      })
      .finally(() => setLoading(false))
      .catch(error => {
        setError(error)
        console.error(error.message)
      })
  }

  const debounced = useMemo(
    () => debounce(handleSearch, SEARCH_AFTER_500_MS),
    []
  )

  const handleInputChange = ({ target: { value } }) => {
    setError(null)
    setFocus(true)

    const parsedValue = value.trim().toUpperCase()

    setSearch(parsedValue)
    if (parsedValue === "") return
    debounced({ value: parsedValue })
  }

  function handleResultClick() {
    setSelectedCrypto(data)
    setFocus(false)
  }

  const handleInputBlur = () => {
    setTimeout(() => {
      setFocus(false)
    }, 400)
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
            onBlur={handleInputBlur}
            onFocus={() => setFocus(true)}
          />
        </div>

        {search !== "" && focus && (
          <div className={styles.resultsList}>
            <p className={styles.resultsForHelper}>Results for "{search}"</p>
            {loading && <Spinner />}
            {error && <p>{error?.message || "Error"}</p>}
            {data && !loading && !error && (
              <button onClick={handleResultClick} className={styles.result}>
                <div className={styles.coinDataContainer}>
                  <Image
                    width={32}
                    height={32}
                    src={`https://cryptocompare.com/${data.imageUrl}`}
                  />
                  <span>{data.id}</span>
                </div>
                <p>{data.price}</p>
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBar

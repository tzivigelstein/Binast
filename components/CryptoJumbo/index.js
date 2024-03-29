import styles from "./index.module.css"
import SkeletonElement from "../Skeletons/SkeletonElement"
import Image from "next/image"
import useCrypto from "../../hooks/useCrypto"
import { imagePlaceholder } from "../../helpers/imagePlaceholder"

const CryptoJumbo = () => {
  const { selectedCrypto, loading } = useCrypto()
  const {
    id,
    name,
    imageUrl,
    price,
    volumeHour,
    changeDay,
    lowDay,
    highDay,
    openDay,
    marketCapital,
  } = selectedCrypto

  return (
    <div className={styles.headingContainer}>
      <div className={styles.main}>
        <div className={styles.logoContainer}>
          {loading ? (
            <SkeletonElement type="roundThumb" style={{ flex: "1 0 auto" }} />
          ) : (
            <div className={styles.logo}>
              <Image
                placeholder="blur"
                blurDataURL={imagePlaceholder}
                height={42}
                width={42}
                src={`https://cryptocompare.com/${imageUrl}`}
                alt={`${name} - ${id}`}
              />
            </div>
          )}
          {loading ? (
            <SkeletonElement style={{ height: "1.3125rem" }} type="text" />
          ) : (
            <span translate="no" className={styles.shortName}>
              {id}
            </span>
          )}
        </div>
        {loading ? (
          <SkeletonElement
            style={{ height: "2.5rem", width: "70%" }}
            type="title"
          />
        ) : (
          <span className={styles.price}>{price}</span>
        )}
        <div className={styles.highLowContainer}>
          <div className={styles.highPriceContainer}>
            {loading ? (
              <SkeletonElement style={{ height: "1.3125rem" }} type="text" />
            ) : (
              <span className={styles.highPrice}>H {highDay}</span>
            )}
          </div>
          {" · "}
          <div className={styles.lowPriceContainer}>
            {loading ? (
              <SkeletonElement style={{ height: "1.3125rem" }} type="text" />
            ) : (
              <span className={styles.lowPrice}>L {lowDay}</span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.detailContainer}>
        <div className={styles.valueContainer}>
          {loading ? (
            <SkeletonElement style={{ height: "1.1875rem" }} type="text" />
          ) : (
            <>
              <label className={styles.label}>Open day</label>
              <span className={styles.value}>{openDay}</span>
            </>
          )}
        </div>
        <div className={styles.valueContainer}>
          {loading ? (
            <SkeletonElement style={{ height: "1.1875rem" }} type="text" />
          ) : (
            <>
              <label className={styles.label}>Volume hour</label>
              <span className={styles.value}>{volumeHour}</span>
            </>
          )}
        </div>
        <div className={styles.valueContainer}>
          {loading ? (
            <SkeletonElement style={{ height: "1.1875rem" }} type="text" />
          ) : (
            <>
              <label className={styles.label}>Market capital</label>
              <span className={styles.value}>{marketCapital}</span>
            </>
          )}
        </div>
        <div className={styles.valueContainer}>
          {loading ? (
            <SkeletonElement style={{ height: "1.1875rem" }} type="text" />
          ) : (
            <>
              <label className={styles.label}>Change day</label>
              <span className={styles.value}>{changeDay}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CryptoJumbo

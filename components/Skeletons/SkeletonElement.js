import React from 'react'
import styles from './skeleton-element.module.css'

const SkeletonElement = ({ style, type }) => {
  const classNames = `${styles.skeleton} ${styles[type]}`
  return <div style={{ ...style }} className={classNames}></div>
}

export default SkeletonElement

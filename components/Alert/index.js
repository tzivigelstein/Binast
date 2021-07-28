import styles from './index.module.css'

const Alert = ({ Icon, message = 'Try our new dark mode' }) => {
  return (
    <div className={styles.alertWrapper}>
      <div className={styles.alertContainer}>
        {Icon && <Icon className={styles.icon} />}
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}

export default Alert

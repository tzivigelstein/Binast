import styles from './index.module.css'

const Alert = ({ Icon, message = 'Example text for the alert' }) => {
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

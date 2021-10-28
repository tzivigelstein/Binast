import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { CSSTransition } from 'react-transition-group'

const Alert = ({ active, Icon, message = 'Example text for the alert' }) => {
  const [activeAlert, setActiveAlert] = useState(active)

  return (
    <CSSTransition
      in={activeAlert}
      classNames={{
        enter: styles.alertEnter,
        enterActive: styles.alertEnterActive,
        exit: styles.alertExit,
        exitActive: styles.alertExitActive,
      }}
      timeout={0}
      unmountOnExit
    >
      <button onClick={() => setActiveAlert(false)} className={styles.alertWrapper}>
        <div className={styles.alertContainer}>
          {Icon && <Icon className={styles.icon} />}
          <p className={styles.message}>{message}</p>
        </div>
      </button>
    </CSSTransition>
  )
}

export default Alert

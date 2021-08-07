import styles from './index.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 translate="no" className={styles.title}>
        <span translate="no" className={styles.titleAccent}>
          B
        </span>
        inast
      </h1>
    </nav>
  )
}

export default Navbar

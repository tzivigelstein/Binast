import styles from './index.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.title}>
        <span className={styles.titleAccent}>B</span>inast
      </h1>
    </nav>
  )
}

export default Navbar

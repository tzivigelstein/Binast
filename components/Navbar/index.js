import styles from './index.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <h1 translate="no" className={styles.title}>
          <span translate="no" className={styles.titleAccent}>
            B
          </span>
          inast
        </h1>
      </Link>
    </nav>
  )
}

export default Navbar

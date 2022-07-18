import styles from './Navbar.module.css'
import igniteLogo from '../assets/ignite-logo.svg'
export function Navbar() {
  return (
    <header className={styles.navbar}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <nav>
        <ol>
          <li> Home </li>
          <li> About </li>
          <li> Services</li>
        </ol>
      </nav>
    </header>
  )
}

import styles from './Menu.module.scss'
import LinkMenu from '../LinkMenu'

const Menu = () => {
  return (
    <header>
        <nav className={styles.nav}>
            <LinkMenu to="/">
              Home
            </LinkMenu>
            <LinkMenu to="/aboutme">
              About Me
            </LinkMenu>
        </nav>
    </header>
  )
}

export default Menu

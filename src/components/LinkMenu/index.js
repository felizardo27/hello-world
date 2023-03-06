import { NavLink } from 'react-router-dom'
import styles from './LinkMenu.module.scss'

const LinkMenu = ({children, to}) => {
    
    return (
        <NavLink 
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.link__underline : ""}
            `} 
            to={to}
        >
            {children}
        </NavLink>
    )
}

export default LinkMenu

import { Link, useLocation } from 'react-router-dom'
import styles from './LinkMenu.module.scss'

const LinkMenu = ({children, to}) => {

    const navigation = useLocation()
    
    return (
        <Link 
            className={`${styles.link} ${navigation.pathname === to ? styles.link__underline : ''}`} 
            to={to}
        >
            {children}
        </Link>
    )
}

export default LinkMenu

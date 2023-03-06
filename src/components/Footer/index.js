import styles from './Footer.module.scss'
import trademark from 'assets/trademark.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={trademark} alt='Trademark'/>
      <p>Desenvolvido por <a target='_blank' href='https://www.github.com/felizardo27' rel="noreferrer">Felizardo27</a></p>
    </footer>
  )
}

export default Footer

import styles from './Banner.module.scss'
import coloredCircle from 'assets/circulo_colorido.png'
import myPhoto from 'assets/my_photo.png'
const Banner = () => {
  return (
    <div className={styles.banner}>
        <div className={styles.presentation}>
            <h1 className={styles.title}>
                Olá, mundo
            </h1>
            <p className={styles.paragraph}>
                Boas vindas ao meu espaço pessoal! Eu sou João Pedro Felizardo, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos e projetos, espero que aprenda algo novo :)
            </p>
        </div>
        <div className={styles.images}>
            <img 
                className={styles.colored_circle} 
                src={coloredCircle} 
                aria-hidden={true}
                alt="Colored Circle"
            />
            <img 
                className={styles.my_photo}
                src={myPhoto}
                aria-hidden={true}
                alt="My profile photo"
            />
        </div>
    </div>
  )
}

export default Banner

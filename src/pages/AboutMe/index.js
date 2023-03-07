import BasePost from "components/BasePost"
import styles from './AboutMe.module.scss'
import photoCover from 'assets/about_me_cover.png'
import photoAboutMe from 'assets/about_me_photo.jpg'

const AboutMe = () => {
  return (
    <BasePost
      photoCover={photoCover}
      title="Sobre mim"
    >
      <h3 className={styles.subtitle}>
        Olá, eu sou João Pedro Felizardo!
      </h3>

      <img 
        src={photoAboutMe}
        alt="About me"
        className={styles.photoAboutMe}
      />

      <p className={styles.paragraph}>
        Olá pessoal, tudo bem? Me chamo João Pedro Felizardo e sou apaixonado por tecnologia desde criança. Lembro-me de estudar HTML já no terceiro colegial, porque sabia que queria seguir na área de tecnologia.
      </p>
      <p className={styles.paragraph}>
        Em 2018, iniciei a graduação em Ciência da Computação, o que me permitiu aprender muito sobre lógica de programação, algoritmos e várias linguagens, incluindo PHP, C++, C#, SQL Server e Java. No entanto, eu sabia que precisava ir além, e por isso comecei a estudar outras linguagens por conta própria, como Python, JavaScript e TypeScript, bem como outras tecnologias, como Linux e redes de computadores.
      </p>
      <p className={styles.paragraph}>
        Comecei minha carreira na Unimed de Dracena, trabalhando por praticamente 3 anos, onde iniciei como estagiário de TI e, após um ano, fui contratado como auxiliar de TI, onde realizava diversas funções de infraestrutura e suporte aos usuários. Nessa época, também arrisquei programar algumas automações em Python, o que foi uma experiência incrível para mim. Aprendi muito sobre gerenciamento de redes e servidores, bem como a solucionar problemas de hardware e software dos usuários. Foi uma oportunidade valiosa para adquirir experiência prática em TI e também desenvolver habilidades interpessoais.
      </p>
      <p className={styles.paragraph}>
        Atualmente trabalho como analista de suporte, mas após esses anos de experiência, percebi que minha paixão está mesmo em desenvolvimento web e decidi seguir essa carreira. Então decidi me aprofundar em React, uma tecnologia que me permite criar interfaces dinâmicas e interativas para a web. Estou confiante de que minhas habilidades e conhecimentos adquiridos serão úteis nessa nova jornada, e estou animado para as novas oportunidades e desafios que virão pela frente.
      </p>

    </BasePost>
  )
}

export default AboutMe

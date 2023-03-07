import styles from './BasePost.module.scss'

const BasePost = ({children, photoCover, title}) => {
  return (
    <article className={styles.basePost__container}>
        <div 
        className={styles.cover} 
        style={{ backgroundImage: `url(${photoCover})` }}
        >
        </div>
        <h2 className={styles.title}>
        {title}
        </h2>

        <div className={styles.content__container}>
            {children}
        </div>

    </article>
  )
}

export default BasePost

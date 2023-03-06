import styles from './Post.module.scss'

const Post = ({post}) => {
  return (
    <div className={styles.post}>
      <img 
        className={styles.cover}
        src={`assets/posts/${post.id}/capa.png`}
        alt='Post cover'
      />
      <h2 className={styles.title}>{post.title}</h2>
      <button className={styles.button}>Ler</button>
    </div>
  )
}

export default Post

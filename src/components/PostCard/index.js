import { Link } from 'react-router-dom'
import styles from './PostCard.module.scss'
import BaseButton from 'components/BaseButton'

const PostCard = ({post}) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          src={`assets/posts/${post.id}/capa.png`}
          alt='Post cover'
        />
        <h2 className={styles.title}>{post.title}</h2>
        <BaseButton>Ler</BaseButton>
      </div>
    </Link>
  )
}

export default PostCard

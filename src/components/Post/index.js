import { useParams } from 'react-router-dom'
import styles from './Post.module.scss'
import posts from 'json/posts.json'
import BasePost from 'components/BasePost'

const Post = () => {
    const params = useParams()

    const post = posts.find(post => post.id === Number(params.id))

    return (
        <BasePost
            photoCover={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
        >
            texto...
        </BasePost>
    )
}

export default Post

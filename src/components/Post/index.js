import { useParams } from 'react-router-dom'
import styles from './Post.module.scss'

const Post = () => {

    const params = useParams()

    return (
        <h1>
            post {params.id}
        </h1>
    )
}

export default Post

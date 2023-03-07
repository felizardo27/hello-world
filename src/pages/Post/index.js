import { useParams } from 'react-router-dom'
import styles from './Post.module.scss'
import posts from 'json/posts.json'
import BasePost from 'components/BasePost'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const Post = () => {
    const params = useParams()

    const post = posts.find(post => post.id === Number(params.id))

    if (!post) return <h1>Página não encontrada...</h1>

    return (
        <BasePost
            photoCover={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
        >
            <div className={styles.postMarkdown__container}>
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </BasePost>
    )
}

export default Post

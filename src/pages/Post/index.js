import { useParams } from 'react-router-dom'
import styles from './Post.module.scss'
import posts from 'json/posts.json'
import BasePost from 'components/BasePost'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import BasePage from 'components/BasePage'
import NotFound from 'pages/NotFound'
import PostCard from 'components/PostCard'

const Post = () => {
    const params = useParams()

    const post = posts.find(post => post.id === Number(params.id))

    if (!post) return <NotFound />

    const recommendedPosts = posts
        .filter(post => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <BasePage>
            <BasePost
                photoCover={`/assets/posts/${post.id}/capa.png`}
                title={post.title}
            >
                <div className={styles.postMarkdown__container}>
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.titleOtherPosts}>
                    Outros posts que você pode gostar:
                </h2>
                <ul className={styles.recommendedPosts}>
                    {recommendedPosts.map(post => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </BasePost>
        </BasePage>
    )
}

export default Post

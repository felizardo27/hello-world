import styles from './Home.module.scss'
import posts from 'json/posts.json'
import Post from "components/PostCard"

const Home = () => {
    return(
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Post post={post}/>
                </li>
            ))}
        </ul>
    )
}

export default Home
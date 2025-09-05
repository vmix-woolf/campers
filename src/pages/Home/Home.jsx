import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/catalog')
    }

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>Campers of your dreams</h1>
                    <p className={styles.subtitle}>
                        You can find everything you want in our catalog
                    </p>
                    <button className={styles.button} onClick={handleClick}>
                        View Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home

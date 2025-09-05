import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/catalog')
    }

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Travel Trucks</h1>
                <p className={styles.subtitle}>
                    Rent the perfect camper and start your adventure today
                </p>
                <button className={styles.button} onClick={handleClick}>
                    View Now
                </button>
            </div>
        </section>
    )
}

export default Home

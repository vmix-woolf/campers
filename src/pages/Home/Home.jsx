import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'
import typography from '../../components/ui/Typography/Typography.module.css'
import styles from './Home.module.css'

function Home() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/catalog')
    }

    return (
        <section className={styles.hero}>
            {/*<div className="container">*/}
                <div className={styles.content}>
                    <h1 className={typography.h1}>Campers of your dreams</h1>
                    <h2 className={typography.h2}>
                        You can find everything you want in our catalog
                    </h2>
                    <Button variant="primary" onClick={handleClick}>
                        View Now
                    </Button>
                </div>
            {/*</div>*/}
        </section>
    )
}

export default Home

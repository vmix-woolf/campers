import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    const location = useLocation()

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    {/* Логотип */}
                    <Link to="/" className={styles.logo}>
                        TravelTrucks
                    </Link>

                    {/* Навигация */}
                    <nav className={styles.nav}>
                        <Link
                            to="/"
                            className={`${styles.link} ${location.pathname === '/' ? styles.active : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/catalog"
                            className={`${styles.link} ${location.pathname === '/catalog' ? styles.active : ''}`}
                        >
                            Catalog
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header

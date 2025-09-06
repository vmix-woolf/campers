import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/favoritesSlice'
import styles from './CamperCard.module.css'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import Button from '../ui/Button/Button'

function CamperCard({ camper }) {
    const { id, name, price, location, description, gallery } = camper
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.items)

    const isFavorite = favorites.includes(id)

    return (
        <div className={styles.card}>
            <img
                src={gallery?.[0]?.thumb || '/fallback.jpg'}
                alt={name}
                className={styles.image}
            />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{name}</h2>
                    <div className={styles.right}>
            <span className={styles.price}>
              {`€${Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </span>
                        <button
                            type="button"
                            className={`${styles.heart} ${isFavorite ? styles.active : ''}`}
                            onClick={() => dispatch(toggleFavorite(id))}
                            aria-label="Toggle favorite"
                        >
                            {isFavorite ? <FaHeart className={styles.activeHeart} /> : <FaRegHeart />}
                        </button>
                    </div>
                </div>
                <p className={styles.location}>{location}</p>
                <p className={styles.description}>{description}</p>
                <Link
                    to={`/catalog/${id}`}
                    target="_blank"
                    className={styles.button}
                >
                    <Button variant="primary">Show more</Button>
                </Link>
            </div>
        </div>
    )
}

export default CamperCard

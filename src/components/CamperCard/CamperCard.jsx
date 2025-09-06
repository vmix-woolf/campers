import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/favoritesSlice'
import styles from './CamperCard.module.css'
import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import Button from '../ui/Button/Button'
import Icon from '../ui/Icon/Icon'

function CamperCard({ camper }) {
    const { id, name, price, location, description, gallery, rating, reviews, AC, bathroom, kitchen, TV, transmission, engine } = camper
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites.items)

    const isFavorite = favorites.includes(id)

    // Создаем массив badges на основе данных
    const badges = []

    if (transmission === 'automatic') badges.push({ label: 'Automatic', icon: 'diagram' })
    if (engine === 'petrol' || engine === 'diesel') badges.push({ label: engine === 'petrol' ? 'Petrol' : 'Diesel', icon: 'fuel-pump' })
    if (kitchen) badges.push({ label: 'Kitchen', icon: 'cup-hot' })
    if (AC) badges.push({ label: 'AC', icon: 'wind' })
    if (bathroom) badges.push({ label: 'Bathroom', icon: 'shower' })
    if (TV) badges.push({ label: 'TV', icon: 'tv' })

    return (
        <div className={styles.card}>
            <img
                src={gallery?.[0]?.thumb || '/fallback.jpg'}
                alt={name}
                className={styles.image}
            />
            <div className={styles.content}>
                {/* Первая строка: название, цена, сердце */}
                <div className={styles.header}>
                    <h2 className={styles.title}>{name}</h2>
                    <div className={styles.right}>
                        <span className={styles.price}>
                            €{Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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

                {/* Вторая строка: рейтинг и локация */}
                <div className={styles.info}>
                    <div className={styles.rating}>
                        <FaStar className={styles.star} />
                        <span className={styles.ratingText}>
                            {rating}({reviews?.length || 0} Reviews)
                        </span>
                    </div>
                    <div className={styles.location}>
                        <FaMapMarkerAlt className={styles.locationIcon} />
                        <span>{location}</span>
                    </div>
                </div>

                {/* Третья строка: описание */}
                <p className={styles.description}>{description}</p>

                {/* Четвертая строка: badges */}
                <div className={styles.badges}>
                    {badges.map((badge, index) => (
                        <div key={index} className={styles.badge}>
                            <Icon name={badge.icon} size={20} />
                            <span>{badge.label}</span>
                        </div>
                    ))}
                </div>

                {/* Кнопка */}
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

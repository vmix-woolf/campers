import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCamperById, clearDetails } from '../../redux/camperDetailsSlice'
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa'
import Icon from '../../components/ui/Icon/Icon'
import Reviews from '../../components/Reviews/Reviews'
import BookingForm from '../../components/BookingForm/BookingForm'
import styles from './Details.module.css'

function Details() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { item, isLoading, error } = useSelector((state) => state.camperDetails)
    const [tab, setTab] = useState('features')

    useEffect(() => {
        dispatch(fetchCamperById(id))
        return () => {
            dispatch(clearDetails())
        }
    }, [dispatch, id])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>
    if (!item) return null

    const {
        name,
        price,
        location,
        description,
        gallery,
        form,
        length,
        width,
        height,
        tank,
        consumption,
        transmission,
        engine,
        AC,
        bathroom,
        kitchen,
        TV,
        radio,
        refrigerator,
        microwave,
        gas,
        water,
        reviews,
        rating,
    } = item


    const badges = []
    if (transmission === 'automatic') badges.push({ label: 'Automatic', icon: 'diagram' })
    if (engine === 'petrol' || engine === 'diesel') badges.push({ label: engine === 'petrol' ? 'Petrol' : 'Diesel', icon: 'fuel-pump' })
    if (kitchen) badges.push({ label: 'Kitchen', icon: 'cup-hot' })
    if (AC) badges.push({ label: 'AC', icon: 'wind' })
    if (radio) badges.push({ label: 'Radio', icon: 'radio' })
    if (TV) badges.push({ label: 'TV', icon: 'tv' })
    if (bathroom) badges.push({ label: 'Bathroom', icon: 'shower' })
    if (refrigerator) badges.push({ label: 'Refrigerator', icon: 'fridge' })
    if (microwave) badges.push({ label: 'Microwave', icon: 'microwave' })
    if (gas) badges.push({ label: 'Gas', icon: 'gas-stove' })
    if (water) badges.push({ label: 'Water', icon: 'ion-water' })

    return (
        <div className="container">
            <div className={styles.details}>
                {/* Первая строка на всю ширину */}
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>{name}</h1>

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

                    <p className={styles.price}>
                        €{Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>

                    <div className={styles.gallery}>
                        {gallery?.map((img, idx) => (
                            <img key={idx} src={img.thumb} alt={`${name}-${idx}`} className={styles.galleryImage} />
                        ))}
                    </div>

                    <p className={styles.description}>{description}</p>
                </div>

                {/* Левая ячейка второй строки - табы */}
                <div className={styles.leftColumn}>
                    <div className={styles.tabs}>
                        <button
                            onClick={() => setTab('features')}
                            className={`${styles.tab} ${tab === 'features' ? styles.activeTab : ''}`}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setTab('reviews')}
                            className={`${styles.tab} ${tab === 'reviews' ? styles.activeTab : ''}`}
                        >
                            Reviews
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {tab === 'features' && (
                            <div className={styles.features}>
                                <div className={styles.badges}>
                                    {badges.map((badge, index) => (
                                        <div key={index} className={styles.badge}>
                                            <Icon name={badge.icon} size={20} className={styles.badgeIcon} />
                                            <span className={styles.badgeLabel}>{badge.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <h3 className={styles.detailsTitle}>Vehicle details</h3>
                                <div className={styles.detailsTable}>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Form</span>
                                        <span className={styles.detailValue}>{form}</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Length</span>
                                        <span className={styles.detailValue}>{length}</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Width</span>
                                        <span className={styles.detailValue}>{width}</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Height</span>
                                        <span className={styles.detailValue}>{height}</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Tank</span>
                                        <span className={styles.detailValue}>{tank}</span>
                                    </div>
                                    <div className={styles.detailRow}>
                                        <span className={styles.detailLabel}>Consumption</span>
                                        <span className={styles.detailValue}>{consumption}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {tab === 'reviews' && <Reviews reviews={reviews} />}
                    </div>
                </div>

                {/* Правая ячейка второй строки - форма */}
                <div className={styles.rightColumn}>
                    <BookingForm />
                </div>
            </div>
        </div>
    )
}

export default Details

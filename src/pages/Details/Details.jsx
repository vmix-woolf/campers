import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCamperById, clearDetails } from '../../redux/camperDetailsSlice'
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
    } = item

    return (
        <div className="container">
            <div className={styles.details}>
                {/* left side */}
                <div className={styles.mainContent}>
                    <h1>{name}</h1>
                    <p className={styles.price}>
                        {`€${Number(price).toLocaleString('de-DE', { minimumFractionDigits: 2 })}`}
                    </p>
                    <p className={styles.location}>{location}</p>

                    <div className={styles.gallery}>
                        {gallery?.map((img, idx) => (
                            <img key={idx} src={img.thumb} alt={`${name}-${idx}`} />
                        ))}
                    </div>

                    <p className={styles.description}>{description}</p>

                    <div className={styles.tabs}>
                        <button
                            onClick={() => setTab('features')}
                            className={tab === 'features' ? styles.active : ''}
                        >
                            Features
                        </button>
                        <button
                            onClick={() => setTab('reviews')}
                            className={tab === 'reviews' ? styles.active : ''}
                        >
                            Reviews
                        </button>
                    </div>

                    {tab === 'features' && (
                        <div className={styles.features}>
                            <h3>Vehicle details</h3>
                            <ul>
                                <li>Form: {form}</li>
                                <li>Length: {length}</li>
                                <li>Width: {width}</li>
                                <li>Height: {height}</li>
                                <li>Tank: {tank}</li>
                                <li>Consumption: {consumption}</li>
                                <li>Transmission: {transmission}</li>
                                <li>Engine: {engine}</li>
                                {AC && <li>AC</li>}
                                {bathroom && <li>Bathroom</li>}
                                {kitchen && <li>Kitchen</li>}
                                {TV && <li>TV</li>}
                                {radio && <li>Radio</li>}
                                {refrigerator && <li>Refrigerator</li>}
                                {microwave && <li>Microwave</li>}
                                {gas && <li>Gas</li>}
                                {water && <li>Water</li>}
                            </ul>
                        </div>
                    )}

                    {tab === 'reviews' && <Reviews reviews={reviews} />}
                </div>

                {/* right side */}
                <aside className={styles.sidebar}>
                    <BookingForm />
                </aside>
            </div>
        </div>
    )
}

export default Details

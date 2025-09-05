import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from '../../redux/campersSlice'
import CamperCard from '../../components/CamperCard/CamperCard'
import styles from './Catalog.module.css'
import Filters from '../../components/Filters/Filters'
import Loader from '../../components/Loader/Loader'

function Catalog() {
    const dispatch = useDispatch()
    const { items, isLoading, error } = useSelector((state) => state.campers)
    const [limit, setLimit] = useState(4)

    useEffect(() => {
        dispatch(fetchCampers())
    }, [dispatch])

    const handleLoadMore = () => {
        setLimit((prev) => prev + 4)
    }

    return (
        <div className="container">
            <div className={styles.layout}>
                <aside className={styles.filters}>
                    <Filters />
                </aside>
                <main className={styles.cards}>
                    <h1 className={styles.title}>Catalog</h1>

                    {isLoading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                    {!isLoading && !error && (
                        <>
                            {items.slice(0, limit).map((camper) => (
                                <CamperCard key={camper.id} camper={camper} />
                            ))}

                            {limit < items.length && (
                                <button className={styles.loadMore} onClick={handleLoadMore} disabled={isLoading}>
                                    {isLoading ? <Loader /> : 'Load more'}
                                </button>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Catalog

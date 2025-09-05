import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from '../../redux/campersSlice'

function Catalog() {
    const dispatch = useDispatch()
    const { items, isLoading, error } = useSelector((state) => state.campers)

    useEffect(() => {
        dispatch(fetchCampers())
    }, [dispatch])

    return (
        <div style={{ padding: '20px' }}>
            <h1>Catalog Page</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!isLoading && !error && (
                <p>Loaded campers: {items.length}</p>
            )}
        </div>
    )
}

export default Catalog


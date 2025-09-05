import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setForm, toggleEquipment } from '../../redux/filtersSlice'
import { fetchCampers } from '../../redux/campersSlice'
import styles from './Filters.module.css'
import { FaMapMarkerAlt, FaCaravan, FaFan, FaUtensils, FaBath } from 'react-icons/fa'

function Filters() {
    const dispatch = useDispatch()
    const { location, form, equipment } = useSelector((state) => state.filters)

    const handleSearch = () => {
        dispatch(fetchCampers())
    }

    return (
        <div className={styles.filters}>
            <h3><FaMapMarkerAlt />Location</h3>
            <input
                type="text"
                value={location}
                onChange={(e) => dispatch(setLocation(e.target.value))}
                placeholder="Kyiv, Ukraine"
            />

            <h3><FaCaravan/>Vehicle type</h3>
            <label>
                <input
                    type="radio"
                    checked={form === 'panelTruck'}
                    onChange={() => dispatch(setForm('panelTruck'))}
                /> Panel Truck
            </label>
            <label>
                <input
                    type="radio"
                    checked={form === 'fullyIntegrated'}
                    onChange={() => dispatch(setForm('fullyIntegrated'))}
                /> Fully Integrated
            </label>
            <label>
                <input
                    type="radio"
                    checked={form === 'alcove'}
                    onChange={() => dispatch(setForm('alcove'))}
                /> Alcove
            </label>

            <h3>Equipment</h3>
            <label>
                <input
                    type="checkbox"
                    checked={equipment.includes('AC')}
                    onChange={() => dispatch(toggleEquipment('AC'))}
                /> AC
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={equipment.includes('kitchen')}
                    onChange={() => dispatch(toggleEquipment('kitchen'))}
                /> Kitchen
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={equipment.includes('bathroom')}
                    onChange={() => dispatch(toggleEquipment('bathroom'))}
                /> Bathroom
            </label>

            <button className={styles.searchBtn} onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default Filters

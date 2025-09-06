import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setForm, toggleEquipment } from '../../redux/filtersSlice'
import { fetchCampers } from '../../redux/campersSlice'
import Button from '../ui/Button/Button'
import Icon from '../ui/Icon/Icon'
import styles from './Filters.module.css'

function Filters() {
    const dispatch = useDispatch()
    const { location, form, equipment } = useSelector((state) => state.filters)

    const handleSearch = () => {
        dispatch(fetchCampers())
    }

    const equipmentOptions = [
        { key: 'AC', label: 'AC', icon: 'wind' },
        { key: 'automatic', label: 'Automatic', icon: 'diagram' },
        { key: 'kitchen', label: 'Kitchen', icon: 'cup-hot' },
        { key: 'TV', label: 'TV', icon: 'tv' },
        { key: 'bathroom', label: 'Bathroom', icon: 'shower' }
    ]

    const vehicleTypes = [
        { key: 'panelTruck', label: 'Van', icon: 'bi-grid-1x2' },
        { key: 'fullyIntegrated', label: 'Fully Integrated', icon: 'bi-grid-2x2' },
        { key: 'alcove', label: 'Alcove', icon: 'bi-grid-3x3-gap' }
    ]

    return (
        <div className={styles.filters}>
            {/* Location */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    Location
                </h3>
                <div className={styles.locationInput}>
                    <Icon name="city" size={20} className={styles.inputIcon} />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => dispatch(setLocation(e.target.value))}
                        placeholder="Kyiv, Ukraine"
                        className={styles.input}
                    />
                </div>
            </div>

            <div className={styles.divider}>Filters</div>

            {/* Vehicle equipment */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Vehicle equipment</h3>
                <div className={styles.filterGrid}>
                    {equipmentOptions.map((option) => (
                        <button
                            key={option.key}
                            type="button"
                            className={`${styles.filterButton} ${
                                equipment.includes(option.key) ? styles.active : ''
                            }`}
                            onClick={() => dispatch(toggleEquipment(option.key))}
                        >
                            <Icon name={option.icon} size={32} />
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Vehicle type */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Vehicle type</h3>
                <div className={styles.filterGrid}>
                    {vehicleTypes.map((type) => (
                        <button
                            key={type.key}
                            type="button"
                            className={`${styles.filterButton} ${
                                form === type.key ? styles.active : ''
                            }`}
                            onClick={() => dispatch(setForm(type.key))}
                        >
                            <Icon name={type.icon} size={32} />
                            <span>{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search button */}
            <div className={styles.buttonContainer}>
                <Button variant="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Filters

import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setForm, toggleEquipment } from '../../redux/filtersSlice'
import { fetchCampers } from '../../redux/campersSlice'
import Button from '../ui/Button/Button'
import styles from './Filters.module.css'

// SVG иконки
const LocationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17 8C17 14 10 19 10 19S3 14 3 8C3 5.239 5.239 3 8 3H12C14.761 3 17 5.239 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

const ACIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 8H17M3 12H17M6 4V16M10 4V16M14 4V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)

const AutomaticIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)

const KitchenIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 2V6C8 7.105 7.105 8 6 8C4.895 8 4 7.105 4 6V2M12 2V6C12 7.105 12.895 8 14 8C15.105 8 16 7.105 16 6V2M3 8H17L16 18H4L3 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const TVIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 2L10 5L13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const BathroomIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 12C3 8.686 5.686 6 9 6H11C14.314 6 17 8.686 17 12V14H3V12Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 18V16M14 18V16M2 14H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
)

const VanIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="6" width="13" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 8H17L18 12V14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const FullyIntegratedIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="6" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

const AlcoveIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 8H18V14H2V8Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 8V4H14V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="5" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="4" width="3" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="4" width="3" height="2" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
)

function Filters() {
    const dispatch = useDispatch()
    const { location, form, equipment } = useSelector((state) => state.filters)

    const handleSearch = () => {
        dispatch(fetchCampers())
    }

    const equipmentOptions = [
        { key: 'AC', label: 'AC', icon: <ACIcon /> },
        { key: 'automatic', label: 'Automatic', icon: <AutomaticIcon /> },
        { key: 'kitchen', label: 'Kitchen', icon: <KitchenIcon /> },
        { key: 'TV', label: 'TV', icon: <TVIcon /> },
        { key: 'bathroom', label: 'Bathroom', icon: <BathroomIcon /> }
    ]

    const vehicleTypes = [
        { key: 'panelTruck', label: 'Van', icon: <VanIcon /> },
        { key: 'fullyIntegrated', label: 'Fully Integrated', icon: <FullyIntegratedIcon /> },
        { key: 'alcove', label: 'Alcove', icon: <AlcoveIcon /> }
    ]

    return (
        <div className={styles.filters}>
            {/* Location */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    {/*<LocationIcon />*/}
                    Location
                </h3>
                <div className={styles.locationInput}>
                    <LocationIcon />
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
                            {option.icon}
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
                            {type.icon}
                            <span>{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Search button */}
            <Button variant="primary" onClick={handleSearch} className={styles.searchButton}>
                Search
            </Button>
        </div>
    )
}

export default Filters

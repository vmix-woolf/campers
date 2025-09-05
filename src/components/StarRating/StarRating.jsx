import styles from './StarRating.module.css'

function StarRating({ value }) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <div className={styles.stars}>
            {stars.map((star) => (
                <span
                    key={star}
                    className={star <= value ? styles.active : styles.inactive}
                >
          ★
        </span>
            ))}
        </div>
    )
}

export default StarRating

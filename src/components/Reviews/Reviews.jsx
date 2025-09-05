import StarRating from '../StarRating/StarRating'
import styles from './Reviews.module.css'

function Reviews({ reviews }) {
    if (!reviews || reviews.length === 0) {
        return <p>No reviews yet.</p>
    }

    return (
        <div className={styles.reviews}>
            {reviews.map((rev, idx) => (
                <div key={idx} className={styles.review}>
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            {rev.reviewer_name[0]}
                        </div>
                        <div>
                            <p className={styles.name}>{rev.reviewer_name}</p>
                            <StarRating value={rev.reviewer_rating} />
                        </div>
                    </div>
                    <p className={styles.comment}>{rev.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default Reviews

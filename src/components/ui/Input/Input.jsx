import styles from './Input.module.css'

function Input({ label, error, ...props }) {
    return (
        <label className={styles.label}>
            {label}
            <input className={styles.input} {...props} />
            {error && <div className={styles.error}>{error}</div>}
        </label>
    )
}

export default Input

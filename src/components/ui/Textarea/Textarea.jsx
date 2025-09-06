import styles from './Textarea.module.css'

function Textarea({ label, error, ...props }) {
    return (
        <label className={styles.label}>
            {label}
            <textarea className={styles.textarea} {...props} />
            {error && <div className={styles.error}>{error}</div>}
        </label>
    )
}

export default Textarea

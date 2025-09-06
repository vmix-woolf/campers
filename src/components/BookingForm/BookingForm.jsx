import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Button from '../ui/Button/Button'
import styles from './BookingForm.module.css'

const BookingSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string(),
})

function BookingForm() {
    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.title}>Book your campervan now</h3>
            <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

            <Formik
                initialValues={{ name: '', email: '', date: '', comment: '' }}
                validationSchema={BookingSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Booking data:', values)
                    alert('Booking successful!')
                    resetForm()
                }}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className={styles.form}>
                        <div className={styles.fieldGroup}>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Name*"
                                className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                            />
                            <ErrorMessage name="name" component="div" className={styles.error} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email*"
                                className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                            />
                            <ErrorMessage name="email" component="div" className={styles.error} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Field
                                name="date"
                                type="date"
                                placeholder="Booking date*"
                                className={`${styles.input} ${touched.date && errors.date ? styles.inputError : ''}`}
                            />
                            <ErrorMessage name="date" component="div" className={styles.error} />
                        </div>

                        <div className={styles.fieldGroup}>
                            <Field
                                name="comment"
                                as="textarea"
                                placeholder="Comment"
                                className={`${styles.textarea} ${touched.comment && errors.comment ? styles.inputError : ''}`}
                            />
                            <ErrorMessage name="comment" component="div" className={styles.error} />
                        </div>

                        <div className={styles.buttonContainer}>
                            <Button variant="primary" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BookingForm

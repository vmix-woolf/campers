import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './BookingForm.module.css'
import Loader from '../../components/Loader/Loader'

const BookingSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string(),
})

function BookingForm() {
    return (
        <div className={styles.formWrapper}>
            <h3>Book your camper</h3>
            <Formik
                initialValues={{ name: '', email: '', date: '', comment: '' }}
                validationSchema={BookingSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log('Booking data:', values)
                    alert('Booking successful!')
                    resetForm()
                }}
            >
                {({ isSubmitting }) => (
                    <Form className={styles.form}>
                        <label>
                            Name
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" className={styles.error} />
                        </label>

                        <label>
                            Email
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className={styles.error} />
                        </label>

                        <label>
                            Date
                            <Field name="date" type="date" />
                            <ErrorMessage name="date" component="div" className={styles.error} />
                        </label>

                        <label>
                            Comment
                            <Field name="comment" as="textarea" rows="4" />
                        </label>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loader /> : 'Book now'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BookingForm

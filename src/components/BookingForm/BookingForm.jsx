import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Input from '../ui/Input/Input'
import Textarea from '../ui/Textarea/Textarea'
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
                {({ isSubmitting, errors, touched }) => (
                    <Form className={styles.form}>
                        <Field
                            name="name"
                            as={Input}
                            label="Name"
                            error={touched.name && errors.name}
                        />
                        <Field
                            name="email"
                            as={Input}
                            type="email"
                            label="Email"
                            error={touched.email && errors.email}
                        />
                        <Field
                            name="date"
                            as={Input}
                            type="date"
                            label="Date"
                            error={touched.date && errors.date}
                        />
                        <Field
                            name="comment"
                            as={Textarea}
                            label="Comment"
                            error={touched.comment && errors.comment}
                        />

                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Booking...' : 'Book now'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BookingForm

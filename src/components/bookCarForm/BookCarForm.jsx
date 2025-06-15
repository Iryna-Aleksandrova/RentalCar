import { Formik, Form, Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import feedbackSchema from '../../utils/validationSchemas';
import { showSuccess } from '../../utils/toastMessages';
import Calendar from '../calendar/Calendar.jsx';
import s from './BookCarForm.module.css';

const initialFormValues = {
  name: '',
  email: '',
  bookingDate: null,
  comment: '',
};

const BookCarForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    if (!values) return;
    console.log(values);
    showSuccess();
    resetForm();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Book your car now</h2>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>

      <Formik
        initialValues={initialFormValues}
        validationSchema={feedbackSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors, touched, dirty, isValid }) => (
          <Form className={s.form}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={clsx(s.field, touched.name && errors.name && s.error)}
              autoFocus
            />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />

            <Field
              type="email"
              name="email"
              placeholder="Email*"
              className={clsx(
                s.field,
                touched.email && errors.email && s.error,
              )}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s.errorMessage}
            />

            <Calendar
              value={values.bookingDate}
              onChange={date => setFieldValue('bookingDate', date)}
            />
            {touched.bookingDate && errors.bookingDate && (
              <div className={s.errorMessage}>{errors.bookingDate}</div>
            )}

            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={clsx(
                s.field,
                s.fieldTextArea,
                touched.comment && errors.comment && s.error,
              )}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={s.errorMessage}
            />

            <button
              type="submit"
              className={s.btn}
              disabled={!dirty || !isValid}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookCarForm;

import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import s from './EditForm.module.css';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Invalid phone number format (xxx-xxx-xxxx)',
    )
    .required('Required'),
});

const EditForm = ({ initialValues, handleSubmit }) => {
  const contactId = useId();
  const phonId = useId();

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.div}>
          <label htmlFor={contactId} className={s.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            className={s.input}
            id={contactId}
          ></Field>
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.div}>
          <label htmlFor={phonId} className={s.label}>
            Number
          </label>
          <Field
            type="tel"
            name="number"
            className={s.input}
            id={phonId}
          ></Field>
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button type="submit" className={s.button}>
          Edit
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;

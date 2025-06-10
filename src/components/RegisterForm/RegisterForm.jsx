import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import s from './RegisterForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(register({ ...values }));
    options.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <div className={s.div}>
            <label className={s.label}>Username</label>
            <Field type="text" name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>
          <div className={s.div}>
            <label className={s.label}>Email</label>
            <Field type="email" name="email" className={s.input} />
            <ErrorMessage name="email" component="span" className={s.error} />
          </div>
          <div className={s.div}>
            <label className={s.label}>Password</label>
            <Field type="password" name="password" className={s.input} />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

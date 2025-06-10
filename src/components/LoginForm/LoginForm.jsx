import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';
import s from './LoginForm.module.css';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(logIn({ ...values }));
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

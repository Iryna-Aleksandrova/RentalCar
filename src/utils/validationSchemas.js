import * as Yup from 'yup';

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  comment: Yup.string()
    .min(5, 'Comment must be at least 5 characters')
    .max(500, 'Too long!'),
  bookingDate: Yup.date().nullable().required('Date is required'),
});

export default FeedbackSchema;

import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchContacts({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
  return (
    <div className={s.form}>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && !error && <p className={s.title}>Request in progress...</p>}
      {error && (
        <p className={s.title}>
          Oops, something went wrong! Please try reloading this page!
        </p>
      )}
    </div>
  );
};

export default ContactsPage;

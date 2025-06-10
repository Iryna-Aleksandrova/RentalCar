import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';
import { editContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState();
  const dispatch = useDispatch();
  const closeModal = () => {
    setIsOpen(false);
  };
  const visibleContacts = useSelector(selectFilteredContacts);
  const handleSubmit = values => {
    dispatch(editContact({ ...values }));
    setIsOpen(false);
  };

  return (
    <ul className={s.list}>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id} className={s.item}>
            <Contact
              {...contact}
              edit={() => {
                setIsOpen(true);
                setContact(contact);
              }}
            />
          </li>
        );
      })}
      {isOpen && (
        <Modal closeModal={closeModal}>
          <EditForm initialValues={contact} handleSubmit={handleSubmit} />
        </Modal>
      )}
    </ul>
  );
};

export default ContactList;

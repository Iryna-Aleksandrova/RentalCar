import { BiSolidUserRectangle } from 'react-icons/bi';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Contact = ({ id, name, number, edit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(id);

    dispatch(deleteContact(id));
    setIsOpen(false);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className={s.item}>
      <div>
        <p className={s.text}>
          <BiSolidUserRectangle /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneSquareAlt /> {number}
        </p>
      </div>
      <button
        className={s.button}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Delete
      </button>
      {isOpen && (
        <Modal closeModal={closeModal}>
          <button onClick={() => setIsOpen(false)} className={s.button}>
            No
          </button>
          <button onClick={handleDelete} className={s.button}>
            Yes
          </button>
        </Modal>
      )}
      <button className={s.button} onClick={edit}>
        Edit
      </button>
    </div>
  );
};

export default Contact;

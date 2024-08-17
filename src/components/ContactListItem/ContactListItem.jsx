// ContactListItem.jsx

import "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}</span>
      <span className={styles.number}>{contact.number}</span>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

// валідація пропсів
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactListItem;

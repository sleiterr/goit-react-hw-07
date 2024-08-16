// ContactListItem.jsx

import "react";
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

export default ContactListItem;

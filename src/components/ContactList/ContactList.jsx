// ContactList.jsx

import "react";
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem/ContactListItem";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  // console.log("Filtered Contacts:", JSON.stringify(filteredContacts, null, 2));

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          className={styles.listItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;
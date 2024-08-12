import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form action={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
          required
        />
      </label>
      <button type="submint" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

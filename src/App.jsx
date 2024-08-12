import { useEffect } from 'react';
import { useDispach } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter'; 
import { fetchContacts } from '../src/redux/contactsOps';
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispach();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );

};

export default App;
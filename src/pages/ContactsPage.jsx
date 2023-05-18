import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Container, Title, Subtitle } from '../components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/thunk';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  //  Перевіряє на дубляж контактів який
  //  вводить користувач порівнюючи новий контакт із тим який вже є
  const checkDublicateName = ({ name }) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  // Функція filteredContacts забезпечує фільтрацію списку контактів
  //  на основі введеного користувачем рядка фільтру.
  const filteredContacts = () => {
    const normalize = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalize);
    });
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm checkDublicateName={checkDublicateName} />
      <Subtitle>Contacts</Subtitle>
      <Filter filterValue={filter} />
      <ContactList filteredContacts={filteredContacts()} />
    </Container>
  );
};

export default ContactsPage;

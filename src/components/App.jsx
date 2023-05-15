// import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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

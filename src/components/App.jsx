import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  // Під час завантаження застосунку контакти, якщо такі є, зчитуються
  //  з локального сховища і записуються у стан ---- перенесла в UseState.

  const [filter, setFilter] = useState('');

  // Під час додавання та видалення контакту контакти зберігаються
  // у локальне сховище localStorage.
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Додає новий контакт та перевіряє на дубляж контактів який
  //  вводить користувач порівнюючи новий контакт із тим який вже є
  const contactAdd = ({ name, number }) => {
    const newContact = { id: nanoid(), name: name, number: number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`This name "${name}" is already exist!`)
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  // Видаляє контакти по кліку на кнопку
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  //  Оновлює властивість filter у стані компонента на значення,
  // яке було введене в полі фільтрації event.target.value. Функція,
  // викликається при кожному введенні нового символу в поле фільтрації.
  const filterUpdate = event => {
    setFilter(event.target.value);
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
      <ContactForm contactAdd={contactAdd} />
      <Subtitle>Contacts</Subtitle>
      <Filter filterValue={filter} filterUpdate={filterUpdate} />
      <ContactList
        filteredContacts={filteredContacts()}
        deleteContact={deleteContact}
      />
    </Container>
  );
};

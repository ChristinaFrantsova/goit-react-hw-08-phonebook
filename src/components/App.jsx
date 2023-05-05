import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // Під час завантаження застосунку контакти, якщо такі є, зчитуються
  //  з локального сховища і записуються у стан.
  useEffect(() => {
    const contactsItem = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsItem);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

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
      : setContacts([newContact, ...contacts]);
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

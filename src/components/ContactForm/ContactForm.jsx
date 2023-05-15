import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Title, Button } from './ContactForm.styled';
import { contactAdd } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

const ContactForm = ({ checkDublicateName }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  // Відповідає за оновлення стану
  const onHandleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    checkDublicateName({ name })
      ? alert(`This name "${name}" is already exist!`)
      : dispatch(contactAdd(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form action="" onSubmit={onSubmitForm}>
        <Title>Name</Title>
        <Label htmlFor={nameInputId}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onHandleChange}
            id={nameInputId}
          />
        </Label>
        <Title>Number</Title>
        <Label htmlFor={numberInputId}>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onHandleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  checkDublicateName: PropTypes.func.isRequired,
};

export default ContactForm;

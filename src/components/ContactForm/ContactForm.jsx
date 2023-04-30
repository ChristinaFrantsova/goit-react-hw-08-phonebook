import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Title, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  // onHandleChange = event => {
  //   this.setState({ name: event.target.value });
  //   console.log(event.target.value);
  // };
  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target.value);
    // console.log(event.target.name);
  };

  // onSubmitForm = event => {
  //   const { name, number } = this.state;
  //   event.preventDefault();
  //   console.log(this.state);
  //   this.props.checkedDublicateName(name)
  //     ? alert(`This name "${name}" is already exist!`)
  //     : this.props.contactAdd({ name: name, number: number });
  //   this.reset();
  // }; -------старий варіант

  onSubmitForm = event => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.contactAdd({ name: name, number: number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form action="" onSubmit={this.onSubmitForm}>
          <Title>Name</Title>
          <Label htmlFor={this.nameInputId}>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onHandleChange}
              id={this.nameInputId}
            />
          </Label>
          <Title>Number</Title>
          <Label htmlFor={this.numberInputId}>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onHandleChange}
              id={this.numberInputId}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

ContactForm.propTypes = {
  contactAdd: PropTypes.func.isRequired,
};

export default ContactForm;

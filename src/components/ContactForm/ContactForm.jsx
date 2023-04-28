import { Component } from 'react';
import { nanoid } from 'nanoid';

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

  onSubmitForm = event => {
    const { name, number } = this.state;
    event.preventDefault();
    console.log(this.state);
    this.props.checkedDublicateName(name)
      ? alert(`This name "${name}" is already exist!`)
      : this.props.contactAdd({ name: name, number: number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form action="" onSubmit={this.onSubmitForm}>
        <span>Name</span>
        <label htmlFor={this.nameInputId}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onHandleChange}
            id={this.nameInputId}
          />
        </label>
        <span>Number</span>
        <label htmlFor={this.numberInputId}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onHandleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;

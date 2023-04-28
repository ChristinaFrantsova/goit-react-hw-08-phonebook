import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    this.contactAdd({ name: name, number: number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  contactAdd = ({ name, number }) => {
    this.setState({
      contacts: [{ id: nanoid(), name, number }, ...this.state.contacts],
    });
  };

  onFilterUpdate = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    // console.log(this.state.filter);
    const { filter, contacts } = this.state;
    const normalize = filter.toLowerCase();
    const contactAvailable = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalize);
    });

    return (
      <div className="container">
        <div>
          <h2>Phonebook</h2>
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
        </div>

        <div>
          <h2>Contacts</h2>
          <span>Find contacts by name</span>
          <label htmlFor="">
            <input
              value={this.state.filter}
              onChange={this.onFilterUpdate}
              type="text"
            ></input>
          </label>
          <ul>
            {contactAvailable.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

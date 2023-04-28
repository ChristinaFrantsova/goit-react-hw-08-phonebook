import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = nanoid();

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
    const { name } = this.state;
    event.preventDefault();
    console.log(this.state);
    this.contactAdd({ name: name });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  contactAdd = ({ name }) => {
    this.setState({
      contacts: [{ id: nanoid(), name }, ...this.state.contacts],
    });
  };

  render() {
    const contactArr = this.state.contacts;
    return (
      <div className="container">
        <div>
          <h2>Phonebook</h2>
          <span>Name</span>
          <form action="" onSubmit={this.onSubmitForm}>
            <label htmlFor={this.nameInputId}></label>
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
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>
            {contactArr.map(el => {
              return <li key={el.id}> {el.name} </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

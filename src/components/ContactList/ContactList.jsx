import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            deleteContact={deleteContact}
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </>
  );
};

ContactList.propTypes = {
  contactAvailable: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

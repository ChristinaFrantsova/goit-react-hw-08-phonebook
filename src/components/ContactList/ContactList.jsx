import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ filteredContacts }) => {
  return (
    <>
      {filteredContacts.map(({ id, name, phone }) => {
        return <ContactItem key={id} id={id} name={name} number={phone} />;
      })}
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

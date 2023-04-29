import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contactAvailable, deleteContact }) => {
  return (
    <>
      {contactAvailable.map(({ id, name, number }) => {
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
  contactAvailable: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;

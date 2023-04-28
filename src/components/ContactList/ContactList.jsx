import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contactAvailable }) => {
  return (
    <>
      {contactAvailable.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </>
  );
};

export default ContactList;

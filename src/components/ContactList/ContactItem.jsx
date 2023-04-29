import PropTypes from 'prop-types';
import { Item, Button, Div } from './Contacts.styled';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <Div>
      <Item key={id}>
        {name}: {number}
        <Button onClick={() => deleteContact(id)} type="button" id={id}>
          Delete
        </Button>
      </Item>
      {/* <button onClick={deleteContact} type="button" id={id}>
        Delete
      </button> */}
    </Div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

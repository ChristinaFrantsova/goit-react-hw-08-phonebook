import PropTypes from 'prop-types';
import { Item, Button, Div } from './Contacts.styled';
import { deleteContactsThunk } from 'redux/contacts/thunk';
import { useDispatch } from 'react-redux';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Div>
      <Item key={id}>
        {name}: {number}
        <Button
          onClick={() => dispatch(deleteContactsThunk(id))}
          type="button"
          id={id}
        >
          Delete
        </Button>
      </Item>
    </Div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

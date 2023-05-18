import PropTypes from 'prop-types';
import { Label, Span, Input } from './Filter.styled';
import { filterUpdate } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

const Filter = ({ filterValue }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(filterUpdate(event.target.value));
  };

  return (
    <Label htmlFor="">
      <Span>Find contacts by name</Span>
      <Input value={filterValue} onChange={handleChange} type="text"></Input>
    </Label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
};

export default Filter;

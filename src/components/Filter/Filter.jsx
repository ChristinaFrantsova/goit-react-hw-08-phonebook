import PropTypes from 'prop-types';
import { Label, Span, Input } from './Filter.styled';

const Filter = ({ filterValue, filterUpdate }) => {
  return (
    <Label htmlFor="">
      <Span>Find contacts by name</Span>
      <Input value={filterValue} onChange={filterUpdate} type="text"></Input>
    </Label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  filterUpdate: PropTypes.func,
};

export default Filter;

import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      <span>Find contacts by name</span>
      <input value={value} onChange={onChange} type="text"></input>
    </label>
  );
};

export default Filter;

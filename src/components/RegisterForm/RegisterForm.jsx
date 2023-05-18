import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <span>Username:</span>
        <input type="text" name="name" />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

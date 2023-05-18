import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        <span>Email:</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;

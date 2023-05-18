import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';

const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;

import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header
      style={{
        display: 'flex',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

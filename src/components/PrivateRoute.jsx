import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoudRedirect = !isLoggedIn && !isRefreshing;

  return shoudRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

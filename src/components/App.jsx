import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { selectIsAuth } from '../../redux/auth/authSelectors';

import Layout from '../components/Layout/Layout';
import Navigation from './Navigation/Navigation';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authThunk';
import { useAuth } from 'hooks';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

// const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();
  // console.log(isRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    // isRefreshing ? (
    //   'Fething user data..'
    // ) : (
    <>
      {/* <Navigation /> */}
      <p>Hello</p>
      {/* 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes> */}
    </>
  );
};

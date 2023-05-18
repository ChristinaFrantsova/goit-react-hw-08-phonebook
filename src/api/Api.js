import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// ======= Contacts ======

export const getContactsApi = async () => {
  const responce = await axios.get('/contacts');
  return responce.data;
};

export const addContactsApi = async contact => {
  const responce = await axios.post('/contacts', contact);
  return responce.data;
};

export const deleteContactsApi = async id => {
  const responce = await axios.delete(`/contacts/${id}`);
  return responce.data;
};

// export const updateContactsAPI = async id => {
//   const { data } = await axios.patch(`/contacts/${id}`);
//   return data;
// };

// ======= User authorization ======

// Utility to add JWT
export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUpUserApi = async user => {
  try {
    const responce = await axios.post('/users/signup', user);
    return responce.data;
  } catch (error) {
    console.log('Sing up Api request ==>', error);
  }
};

export const logInUserApi = async user => {
  try {
    const responce = await axios.post('/users/login', user);
    return responce.data;
  } catch (error) {
    console.log('LogIn Api request ==>', error);
  }
};

export const logOutUserApi = async () => {
  const responce = await axios.post('/users/logout');
  return responce.data;
};

// getCurrentUser використовуємо для рефреша сторінки, щоб дані юзера підтягувались
export const getCurrentUser = async () => {
  const responce = await axios.get('/users/current');
  return responce.data;
};

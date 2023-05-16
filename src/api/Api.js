import axios from 'axios';

axios.defaults.baseURL = 'https://64634fc94dca1a661359d866.mockapi.io';

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

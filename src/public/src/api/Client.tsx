import axios from 'axios';

export const Client = axios.create({
  baseURL: 'https://api.domsplace.com/v1/'
});

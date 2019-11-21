import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.vimeo.com/channels/bestofthemonth/',
  headers: { Authorization: 'bearer 57930b58a1a128c6c01489efd1ab3163' },
});

export default api;

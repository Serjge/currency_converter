import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-RapidAPI-Host': process.env.REACT_APP_HOST_URL as string,
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY as string,
  },
});

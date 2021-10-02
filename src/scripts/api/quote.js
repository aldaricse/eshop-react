import axios from 'axios';
import { urlAPI } from '../config';

const urlQuote = `${urlAPI}/quotation`;

export const postQuotation = (data) => {
  return axios.post(`${urlQuote}`, data);
}
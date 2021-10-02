import axios from 'axios';
import { urlAPI } from '../config';

const urlProducts = `${urlAPI}/products`;

export const getProducts= () => {
  return axios.get(`${urlProducts}`);
}

export const getProductDetail= (id_product) => {
  return axios.get(`${urlProducts}/${id_product}`);
}
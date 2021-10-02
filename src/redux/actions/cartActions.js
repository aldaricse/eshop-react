import axios from 'axios';
import { SHOW_CART, ADD_TO_CART, DELETE_FROM_CART, UPDATE_FROM_CART, CLEAR_CART } from './types';
import { urlAPI } from '@scripts/config';

// const urlCocktails= `${urlAPI}`;

// const initLoading = (dispatch) => dispatch({ type: INIT_LOADING });

export const showCart = () => {
  return {
    type: SHOW_CART
  }
}

export const addToCart = (product) => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product
  })
}

export const deleteFromCart = (id) => dispatch => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id
  })
}

export const updateFromCart = (id, quantity) => dispatch => {
  const data = { id, quantity };
  dispatch({
    type: UPDATE_FROM_CART,
    payload: data
  })
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}
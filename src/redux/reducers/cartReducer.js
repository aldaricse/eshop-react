import { SHOW_CART, ADD_TO_CART, DELETE_FROM_CART, UPDATE_FROM_CART, CLEAR_CART } from '../actions/types';

// cada reducer tiene su propio state

const initialState = {
  cart: [
    // {
    //   characteristics: null,
    //   created_at: "2020-08-25 21:12:57",
    //   description: null,
    //   id: 1,
    //   image: "5f453889444bb_8a3bb873-20b7-45df-8415-7c12dab60947.jpg",
    //   is_offer: "1",
    //   name: "GUANTES MULTIUSO",
    //   price: null,
    //   productcategory_id: 6,
    //   slug: "guantes-multiuso",
    //   specifications: null,
    //   state: "1",
    //   updated_at: "2020-08-25 21:12:57",
    // }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SHOW_CART:
      return{
        ...state
      }
    case ADD_TO_CART:
      // por defecto agrega 1
      action.payload['quantity'] = 1;
      return{
        ...state,
        cart: [...state.cart, action.payload]
      }
    case DELETE_FROM_CART:
      return{
        ...state,
        cart: state.cart.filter(item=> item.id != action.payload)
      }
    case UPDATE_FROM_CART:
      let update = state.cart.map(item=> { 
        item.quantity = (item.id == action.payload.id) ? parseInt(action.payload.quantity) : item.quantity;
        return item;
      })

      return{
        ...state,
        cart: update
      }
    case CLEAR_CART:
      return{
        ...state,
        cart: []
      }
    default:
      return state;
  }
}
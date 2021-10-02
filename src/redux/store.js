import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {};

const thunkMiddleware = [thunk];

const storageState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};

const store = createStore(
    rootReducer, 
    // initialState, 
    storageState, 
    compose(applyMiddleware(...thunkMiddleware), 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose
) );

store.subscribe(()=> {
    // console.log(store.getState());
    localStorage.setItem('cart', JSON.stringify(store.getState()));
  })

export default store;
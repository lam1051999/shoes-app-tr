import {createStore, combineReducers, applyMiddleware} from 'redux';
import {cartReducer} from '../reducers/reducers';

const reducer = combineReducers({
  cartReducer,
});

const store = createStore(reducer, {});

export default store;

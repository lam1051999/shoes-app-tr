import {ACTION_TYPES} from '../../constants/Constants';
import {add2Cart, increaseItem, decreaseItem} from './helper';

const initialCartState = [];
export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return add2Cart(state, action.item);
    case ACTION_TYPES.INCREASE_ITEM:
      return increaseItem(state, action.item);
    case ACTION_TYPES.DECREASE_ITEM:
      return decreaseItem(state, action.item);
    default:
      return state;
  }
};

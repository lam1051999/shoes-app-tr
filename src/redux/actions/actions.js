import {ACTION_TYPES} from '../../constants/Constants';

export const addToCart = item => ({
  type: ACTION_TYPES.ADD_TO_CART,
  item: item,
});
export const increaseItem = item => ({
  type: ACTION_TYPES.INCREASE_ITEM,
  item: item,
});
export const decreaseItem = item => ({
  type: ACTION_TYPES.DECREASE_ITEM,
  item: item,
});

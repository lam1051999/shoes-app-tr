import {
  SCREEN_HEIGHT,
  CART_IMAGE_WIDTH,
  CART_IMAGE_HEIGHT,
} from '../../../constants/Constants';

const {StyleSheet} = require('react-native');

export const CartStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  headerBagText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 30,
    flexGrow: 1,
  },
  headerTotalText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  flatlistContainer: {
    height: SCREEN_HEIGHT - 260,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    position: 'relative',
  },
  itemImage: {
    width: CART_IMAGE_WIDTH,
    height: CART_IMAGE_HEIGHT,
    transform: [
      {
        rotate: '-30deg',
      },
    ],
    position: 'absolute',
    top: 10,
    left: 0,
  },
  itemDetailContainer: {
    flexGrow: 1,
    marginLeft: 40,
  },
  itemName: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
  },
  itemPrice: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    marginVertical: 5,
  },
  itemButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemButtonContainer: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  itemButtonText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 15,
    marginHorizontal: 15,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  totalText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    flexGrow: 1,
  },
  totalMoney: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
  },
});

import {StyleSheet} from 'react-native';
import {
  CARD_WIDTH,
  CARD_HEIGHT,
  SCREEN_WIDTH,
  ITEM_IMAGE_WIDTH,
  ITEM_IMAGE_HEIGHT,
  MORE_ITEM_IMAGE_WIDTH,
  MORE_ITEM_IMAGE_HEIGHT,
  MORE_ITEM_CONTAINER_WIDTH,
  MORE_ITEM_CONTAINER_HEIGHT,
  SCREEN_HEIGHT,
  SHOWROM_IMAGE_WIDTH,
  SHOWROM_IMAGE_HEIGHT,
} from '../../../constants/Constants';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    position: 'relative',
  },
  headerContaier: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 30,
    flexGrow: 1,
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  flatlistCategoryContainer: {
    height: 37,
    marginVertical: 5,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  category: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'JosefinSans-Regular',
  },
  flatlistItemContainer: {
    height: CARD_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'relative',
  },
  itemContainer: {
    position: 'relative',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  itemWrapper: {
    position: 'absolute',
    ...StyleSheet.absoluteFill,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    padding: 10,
  },
  itemContentContainer: {
    width: '100%',
    height: '100%',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCategory: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 17,
    color: 'white',
    flexGrow: 1,
  },
  itemName: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: 'white',
  },
  itemPrice: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    color: 'white',
  },
  itemEmptyView: {
    flexGrow: 1,
  },
  itemImage: {
    width: ITEM_IMAGE_WIDTH,
    height: ITEM_IMAGE_HEIGHT,
    position: 'absolute',
    right: -10,
    top: (CARD_HEIGHT - ITEM_IMAGE_HEIGHT) / 2,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    transform: [
      {
        rotate: '-90deg',
      },
      {
        perspective: 1000,
      },
    ],
    width: CARD_HEIGHT,
    height: 30,
    position: 'absolute',
    top: CARD_HEIGHT / 2 - 15,
    left: -CARD_HEIGHT / 2 + 30,
  },
  optionContainer: {
    paddingVertical: 5,
    width: CARD_HEIGHT / 3 - 5,
  },
  option: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  moreContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  moreText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
    flexGrow: 1,
  },
  moreItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  moreItemContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    position: 'relative',
    width: MORE_ITEM_CONTAINER_WIDTH,
    height: MORE_ITEM_CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreItemImage: {
    width: MORE_ITEM_IMAGE_WIDTH,
    height: MORE_ITEM_IMAGE_HEIGHT,
    marginBottom: 10,
  },
  moreItemName: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  moreItemPrice: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 13,
    textAlign: 'center',
  },
  moreItemNewTextContainer: {
    position: 'absolute',
    width: 70,
    height: 30,
    backgroundColor: '#F23A66',
    top: 35 - 30 / 2,
    left: -35 + 30 / 2,
    transform: [
      {
        rotate: '-90deg',
      },
      {
        perspective: 1000,
      },
    ],
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreItemNewText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  moreItemHeart: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  detailContainer: {
    position: 'absolute',
    top: 97,
    left: 70,
  },
  transitionLayerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
  },
  transitionLayerHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transitionLayerHeaderArrow: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  transitionLayerHeaderText: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 20,
  },
  transitionLayerHeaderHeartContainer: {
    width: 45,
    height: 45,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  transitionLayerEmptyView: {
    height: SCREEN_HEIGHT * 0.32,
  },
  transitionLayerImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  transitionLayerImageContainer: {
    padding: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
  },
  transitionLayerImage: {
    width: SHOWROM_IMAGE_WIDTH,
    height: SHOWROM_IMAGE_HEIGHT,
  },
  divider: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  transitionLayerDetailContainer: {},
  transitionLayerDetailHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  transitionLayerDetailHeaderName: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 17,
    flexGrow: 1,
  },
  transitionLayerDetailHeaderPrice: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 17,
  },
  transitionLayerDetailDescription: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    color: '#757575',
  },
  transitionLayerDetailSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  transitionLayerDetailSizeText: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 17,
    flexGrow: 1,
  },
  transitionLayerDetailSizeUS: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 17,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  transitionLayerDetailSizeUK: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 17,
    marginLeft: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  transitionLayerDetailFlatlistContainer: {
    marginVertical: 10,
  },
  transitionLayerDetailFlatlistHeaderContainer: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  transitionLayerDetailFlatlistHeaderText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
    marginRight: 5,
  },
  transitionLayerDetailFlatlistItemContainer: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: 60,
  },
  transitionLayerDetailFlatlistItemText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 15,
  },
  transitionLayerDetailAddToBagContainer: {
    borderRadius: 10,
    padding: 10,
  },
  transitionLayerDetailAddToBagText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});

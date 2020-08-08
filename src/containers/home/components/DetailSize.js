import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {HomeStyles as styles} from '../styles/Styles';
import {
  FlatList,
  TouchableWithoutFeedback,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated, {Value, timing, Easing} from 'react-native-reanimated';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/actions/actions';

export default function DetailSize({itemData}) {
  const _scaleButton = useRef(new Value(1)).current;
  const [sizeType, setSizeType] = useState('US');
  const [size, setSize] = useState(itemData?.sizes[0]);
  const dispatch = useDispatch();
  function onTapHandlerStateChange(evt) {
    if (evt.nativeEvent.state === State.ACTIVE) {
      let newItem = {
        unique_id: itemData.unique_id,
        description: itemData.description,
        backgroundColor: itemData.backgroundColor,
        size: size,
        price: itemData.price,
        name: itemData.name,
        source: itemData.source,
      };
      dispatch(addToCart(newItem));
      timing(_scaleButton, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        toValue: 0.95,
      }).start(() => {
        timing(_scaleButton, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
        }).start();
      });
    }
  }

  return (
    <View style={styles.transitionLayerDetailContainer}>
      <View style={styles.transitionLayerDetailHeaderContainer}>
        <Text style={styles.transitionLayerDetailHeaderName}>
          {itemData?.name}
        </Text>
        <Text style={styles.transitionLayerDetailHeaderPrice}>
          ${itemData?.price.toFixed(2)}
        </Text>
      </View>
      <Text style={styles.transitionLayerDetailDescription}>
        {itemData?.description}
      </Text>
      <View style={styles.transitionLayerDetailSizeContainer}>
        <Text style={styles.transitionLayerDetailSizeText}>Size</Text>
        <TouchableWithoutFeedback onPress={() => setSizeType('US')}>
          <Text
            style={[
              styles.transitionLayerDetailSizeUS,
              {
                color: sizeType === 'US' ? 'black' : '#bdbdbd',
              },
            ]}>
            US
          </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setSizeType('UK')}>
          <Text
            style={[
              styles.transitionLayerDetailSizeUK,
              {
                color: sizeType === 'UK' ? 'black' : '#bdbdbd',
              },
            ]}>
            UK
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.transitionLayerDetailFlatlistContainer}>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={itemData?.sizes}
          ListHeaderComponent={
            <TouchableWithoutFeedback onPress={() => setSize(0)}>
              <View
                style={[
                  styles.transitionLayerDetailFlatlistHeaderContainer,
                  {
                    backgroundColor:
                      size === 0 ? itemData.backgroundColor : 'white',
                  },
                ]}>
                <Text
                  style={[
                    styles.transitionLayerDetailFlatlistHeaderText,
                    {
                      color: size === 0 ? 'white' : 'black',
                    },
                  ]}>
                  Try it
                </Text>
                <FoundationIcon
                  name="foot"
                  size={20}
                  color={size === 0 ? 'white' : 'black'}
                />
                <FoundationIcon
                  name="foot"
                  size={20}
                  style={{
                    transform: [
                      {
                        rotateY: '180deg',
                      },
                    ],
                    marginLeft: 2,
                  }}
                  color={size === 0 ? 'white' : 'black'}
                />
              </View>
            </TouchableWithoutFeedback>
          }
          renderItem={({item}) => (
            <TouchableWithoutFeedback onPress={() => setSize(item)}>
              <View
                style={[
                  styles.transitionLayerDetailFlatlistItemContainer,
                  {
                    backgroundColor:
                      size === item ? itemData.backgroundColor : 'white',
                  },
                ]}>
                <Text
                  style={[
                    styles.transitionLayerDetailFlatlistItemText,
                    {
                      color: size === item ? 'white' : 'black',
                    },
                  ]}>
                  {item}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={item => item + 'key'}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
        <Animated.View
          style={[
            styles.transitionLayerDetailAddToBagContainer,
            {
              backgroundColor: itemData?.backgroundColor,
              transform: [
                {
                  scale: _scaleButton,
                },
              ],
            },
          ]}>
          <Text style={styles.transitionLayerDetailAddToBagText}>
            ADD TO BAG
          </Text>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
}

import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList, TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {Value, timing, Easing} from 'react-native-reanimated';
import {HomeStyles} from '../../home/styles/Styles';
import {CartStyles as styles} from '../styles/Styles';
import CartItem from './CartItem';

function totalMoney(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.numbers;
  }, 0);
}

export default function Cart() {
  const _scaleButton = useRef(new Value(1)).current;
  const cartItems = useSelector(state => state.cartReducer);
  function onTapHandlerStateChange(evt) {
    if (evt.nativeEvent.state === State.ACTIVE) {
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerBagText}>My Bag</Text>
        <Text style={styles.headerTotalText}>
          Total {cartItems.length} items
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.flatlistContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          renderItem={({item}) => <CartItem item={item} />}
          keyExtractor={item => item.unique_id + 'key'}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalMoney}>
          ${totalMoney(cartItems).toFixed(2)}
        </Text>
      </View>
      <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
        <Animated.View
          style={[
            HomeStyles.transitionLayerDetailAddToBagContainer,
            {
              backgroundColor: '#F23A66',
              transform: [
                {
                  scale: _scaleButton,
                },
              ],
            },
          ]}>
          <Text style={HomeStyles.transitionLayerDetailAddToBagText}>
            CHECK OUT
          </Text>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
}

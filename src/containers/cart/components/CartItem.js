import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {Value, timing, Easing} from 'react-native-reanimated';
import {CartStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {increaseItem, decreaseItem} from '../../../redux/actions/actions';

export default function CartItem({item}) {
  const _scaleDecreaseButton = useRef(new Value(1)).current;
  const _scaleIncreaseButton = useRef(new Value(1)).current;
  const dispatch = useDispatch();
  function onIncreaseTapHandlerStateChange(evt) {
    if (evt.nativeEvent.state === State.ACTIVE) {
      dispatch(increaseItem(item));
      timing(_scaleIncreaseButton, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        toValue: 0.8,
      }).start(() => {
        timing(_scaleIncreaseButton, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
        }).start();
      });
    }
  }
  function onDecreaseTapHandlerStateChange(evt) {
    if (evt.nativeEvent.state === State.ACTIVE) {
      dispatch(decreaseItem(item));
      timing(_scaleDecreaseButton, {
        duration: 100,
        easing: Easing.inOut(Easing.ease),
        toValue: 0.8,
      }).start(() => {
        timing(_scaleDecreaseButton, {
          duration: 100,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
        }).start();
      });
    }
  }

  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.itemImageContainer,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Image
          style={styles.itemImage}
          resizeMode="cover"
          source={item.source}
        />
      </View>
      <View style={styles.itemDetailContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.itemButtonsContainer}>
          <TapGestureHandler
            onHandlerStateChange={onDecreaseTapHandlerStateChange}>
            <Animated.View
              style={[
                styles.itemButtonContainer,
                {
                  transform: [
                    {
                      scale: _scaleDecreaseButton,
                    },
                  ],
                },
              ]}>
              <AntDesignIcon name="minus" size={25} color="black" />
            </Animated.View>
          </TapGestureHandler>
          <Text style={styles.itemButtonText}>{item.numbers}</Text>
          <TapGestureHandler
            onHandlerStateChange={onIncreaseTapHandlerStateChange}>
            <Animated.View
              style={[
                styles.itemButtonContainer,
                {
                  transform: [
                    {
                      scale: _scaleIncreaseButton,
                    },
                  ],
                },
              ]}>
              <AntDesignIcon name="plus" size={25} color="black" />
            </Animated.View>
          </TapGestureHandler>
        </View>
      </View>
    </View>
  );
}

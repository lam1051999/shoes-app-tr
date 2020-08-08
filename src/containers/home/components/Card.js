import React from 'react';
import {View, Text} from 'react-native';
import {HomeStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  concat,
  Value,
  SpringUtils,
  spring,
} from 'react-native-reanimated';

export default function Card({
  _translateXItem = 0,
  item,
  _rotateYBackground = 0,
  _rotate = 0,
  category = 'Addidas',
  marginHorizontal = 0,
  setItemData = () => {},
  _animated = new Value(0),
  _opacityThings = 1,
  _borderRadiusBackground = 10,
  _scaleXBackgroundDetail = 1,
  _scaleYBackgroundDetail = 1,
  _translateXBackgroundDetail = 0,
  _translateYBackgroundDetail = 0,
}) {
  function onTapHandlerStateChange(evt) {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      setItemData(item);
      spring(_animated, {
        ...SpringUtils.makeDefaultConfig(),
        overshootClamping: true,
        damping: 20,
        toValue: 1,
      }).start();
    }
  }

  return (
    <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
      <Animated.View
        style={[
          styles.itemContainer,
          {
            transform: [
              {
                translateX: _translateXItem,
              },
            ],
            marginHorizontal: marginHorizontal,
          },
        ]}>
        <Animated.View
          style={[
            styles.itemWrapper,

            {
              backgroundColor: item.backgroundColor,
              borderRadius: _borderRadiusBackground,
              transform: [
                {
                  rotateY: concat(_rotateYBackground, 'deg'),
                },
                {
                  perspective: 1000,
                },
                {
                  scaleX: _scaleXBackgroundDetail,
                },
                {
                  scaleY: _scaleYBackgroundDetail,
                },
                {
                  translateX: _translateXBackgroundDetail,
                },
                {
                  translateY: _translateYBackgroundDetail,
                },
              ],
            },
          ]}>
          <Animated.View
            style={[styles.itemContentContainer, {opacity: _opacityThings}]}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemCategory}>{category}</Text>
              <AntDesignIcon name="hearto" size={25} color="white" />
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <View style={styles.itemEmptyView} />
            <AntDesignIcon
              style={{alignSelf: 'flex-end'}}
              name="arrowright"
              size={25}
              color="white"
            />
          </Animated.View>
        </Animated.View>
        <Animated.Image
          source={item.source}
          style={[
            styles.itemImage,
            {
              transform: [
                {
                  rotate: concat(_rotate, 'deg'),
                },
                {
                  perspective: 1000,
                },
              ],
            },
          ]}
          resizeMode="cover"
        />
      </Animated.View>
    </TapGestureHandler>
  );
}

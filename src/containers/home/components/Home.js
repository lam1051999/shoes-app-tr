import React, {useState, useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {HomeStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {
  FlatList,
  TouchableWithoutFeedback,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {
  CATEGORIES,
  ITEMS_DATA,
  OPTIONS,
  CARD_WIDTH,
  CUT_OFF_OPACITY,
} from '../../../constants/Constants';
import Animated, {
  event,
  Value,
  interpolate,
  spring,
  SpringUtils,
} from 'react-native-reanimated';
import Card from './Card';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import DetailSize from './DetailSize';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const AnimatedFontistoIcon = Animated.createAnimatedComponent(FontistoIcon);

export default function Home() {
  const _scrollXAxis = useRef(new Value(0)).current;
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [option, setOption] = useState(OPTIONS[1].name);
  const [itemData, setItemData] = useState(null);
  const _animated = useRef(new Value(0)).current;
  const _onScroll = event([
    {
      nativeEvent: {
        contentOffset: {
          x: _scrollXAxis,
        },
      },
    },
  ]);
  function snapPoints(cat) {
    return ITEMS_DATA[cat].map((item, index) => {
      if (index === 0) return 0;
      else return (40 + CARD_WIDTH) * index;
    });
  }
  const _translateYDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [0, -50],
  });
  const _opacityDetail = interpolate(_animated, {
    inputRange: [0, CUT_OFF_OPACITY, 1],
    outputRange: [0, 1, 1],
  });
  const _zIndexDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [-10000, 10000],
  });
  const _opacityTransitionLayer = interpolate(_animated, {
    inputRange: [0, 0.5, 0.8, 1],
    outputRange: [0, 0, 1, 1],
  });
  const _zIndexTransitionLayer = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [-10000, 10001],
  });
  const _translateYTransitionLayer = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [50, 0],
  });
  const _rotateImage = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [-30, -20],
  });
  const _borderRadiusBackgroundDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [10, 1000],
  });
  const _scaleXBackgroundDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [1, 2.3],
  });
  const _scaleYBackgroundDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [1, 2.2],
  });
  const _translateXBackgroundDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });
  const _translateYBackgroundDetail = interpolate(_animated, {
    inputRange: [0, 1],
    outputRange: [0, -100],
  });
  const _opacityBackView = interpolate(_animated, {
    inputRange: [0, 0.2, 1],
    outputRange: [1, 0, 0],
  });
  function onTapHandlerStateChange(evt) {
    if (evt.nativeEvent.oldState === State.ACTIVE) {
      spring(_animated, {
        ...SpringUtils.makeDefaultConfig(),
        overshootClamping: true,
        damping: 20,
        toValue: 0,
      }).start();
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: _opacityBackView}}>
        <View style={styles.headerContaier}>
          <Text style={styles.headerText}>Discover</Text>
          <View style={styles.iconContainer}>
            <AntDesignIcon name="search1" size={18} color="black" />
          </View>
          <View style={styles.iconContainer}>
            <IoniconsIcon
              name="ios-notifications-outline"
              size={22}
              color="black"
            />
          </View>
        </View>
        <View style={styles.flatlistCategoryContainer}>
          <FlatList
            data={CATEGORIES}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                style={styles.categoryContainer}
                onPress={() => setCategory(item.name)}>
                <Text
                  style={[
                    styles.category,
                    {color: item.name === category ? 'black' : '#9e9e9e'},
                  ]}>
                  {item.name}
                </Text>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={item => item.id + 'key'}
          />
        </View>
        <View style={styles.flatlistItemContainer}>
          <Animated.View
            style={[
              styles.optionsContainer,
              {
                zIndex: interpolate(_scrollXAxis, {
                  inputRange: ITEMS_DATA[category].reduce((accum, item) => {
                    if (item.id === 1) {
                      accum = [...accum, 0, (40 + CARD_WIDTH) / 2];
                    } else {
                      accum = [
                        ...accum,
                        (item.id - 1) * (40 + CARD_WIDTH),
                        (item.id - 1) * (40 + CARD_WIDTH) +
                          (40 + CARD_WIDTH) / 2,
                      ];
                    }
                    return accum;
                  }, []),
                  outputRange: ITEMS_DATA[category].reduce((accum, item) => {
                    accum = [...accum, 20, -1000];
                    return accum;
                  }, []),
                }),
              },
            ]}>
            {OPTIONS.map(item => (
              <TouchableWithoutFeedback
                style={styles.optionContainer}
                key={item.id}
                onPress={() => setOption(item.name)}>
                <Text
                  style={[
                    styles.option,
                    {color: item.name === option ? 'black' : '#9e9e9e'},
                  ]}>
                  {item.name}
                </Text>
              </TouchableWithoutFeedback>
            ))}
          </Animated.View>
          <AnimatedFlatlist
            decelerationRate={0.85}
            onScroll={_onScroll}
            data={ITEMS_DATA[category]}
            snapToOffsets={snapPoints(category)}
            contentContainerStyle={{paddingLeft: 50}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              const _rotate = interpolate(_scrollXAxis, {
                inputRange: [
                  (CARD_WIDTH + 40) * (item.id - 2),
                  (CARD_WIDTH + 40) * (item.id - 1) - (CARD_WIDTH * 2) / 3,
                  (CARD_WIDTH + 40) * (item.id - 1) - CARD_WIDTH / 3,
                  (CARD_WIDTH + 40) * (item.id - 1),
                  (CARD_WIDTH + 40) * (item.id - 1) + CARD_WIDTH / 3,
                  (CARD_WIDTH + 40) * (item.id - 1) + (CARD_WIDTH * 2) / 3,
                  (CARD_WIDTH + 40) * item.id,
                ],
                outputRange: [-30, -50, -40, -30, -40, -50, -30],
              });
              const _translateXItem = interpolate(_scrollXAxis, {
                inputRange: [
                  (CARD_WIDTH + 40) * (item.id - 2),
                  (CARD_WIDTH + 40) * (item.id - 1),
                  (CARD_WIDTH + 40) * (item.id - 1) + (CARD_WIDTH + 40) / 3,
                  (CARD_WIDTH + 40) * item.id,
                ],
                outputRange: [0, 0, -10, -200],
              });
              const _rotateYBackground = interpolate(_scrollXAxis, {
                inputRange: [
                  (CARD_WIDTH + 40) * (item.id - 2),
                  (CARD_WIDTH + 40) * (item.id - 1) - (CARD_WIDTH * 2) / 3,
                  (CARD_WIDTH + 40) * (item.id - 1) - CARD_WIDTH / 3,
                  (CARD_WIDTH + 40) * (item.id - 1),
                  (CARD_WIDTH + 40) * (item.id - 1) + CARD_WIDTH / 3,
                  (CARD_WIDTH + 40) * (item.id - 1) + (CARD_WIDTH * 2) / 3,
                  (CARD_WIDTH + 40) * item.id,
                ],
                outputRange: [0, -50, 20, 0, 20, -50, 0],
              });

              return (
                <Card
                  _rotate={_rotate}
                  _rotateYBackground={_rotateYBackground}
                  _translateXItem={_translateXItem}
                  item={item}
                  category={category}
                  marginHorizontal={20}
                  setItemData={setItemData}
                  _animated={_animated}
                />
              );
            }}
            keyExtractor={item => item.id + 'key'}
          />
        </View>
        <View style={styles.moreContainer}>
          <Text style={styles.moreText}>More</Text>
          <AntDesignIcon name="arrowright" size={25} color="black" />
        </View>
        <View style={styles.moreItemsContainer}>
          {ITEMS_DATA[category].slice(0, 2).map(item => (
            <View key={item.id} style={styles.moreItemContainer}>
              <Image
                source={item.source}
                resizeMode="cover"
                style={styles.moreItemImage}
              />
              <Text style={styles.moreItemName}>{item.name}</Text>
              <Text style={styles.moreItemPrice}>${item.price.toFixed(2)}</Text>
              <AntDesignIcon
                style={styles.moreItemHeart}
                name="hearto"
                size={25}
                color="black"
              />
              <View style={styles.moreItemNewTextContainer}>
                <Text style={styles.moreItemNewText}>New</Text>
              </View>
            </View>
          ))}
        </View>
      </Animated.View>
      {/* detail */}
      <Animated.View
        style={[
          styles.detailContainer,
          {
            zIndex: _zIndexDetail,
            opacity: _opacityDetail,
            transform: [
              {
                translateY: _translateYDetail,
              },
            ],
          },
        ]}>
        {itemData && (
          <Card
            _opacityThings={0}
            _borderRadiusBackground={_borderRadiusBackgroundDetail}
            _rotate={_rotateImage}
            item={itemData}
            _scaleXBackgroundDetail={_scaleXBackgroundDetail}
            _scaleYBackgroundDetail={_scaleYBackgroundDetail}
            _translateXBackgroundDetail={_translateXBackgroundDetail}
            _translateYBackgroundDetail={_translateYBackgroundDetail}
            category={category}
          />
        )}
      </Animated.View>
      {/* transition layer */}
      <Animated.View
        style={[
          styles.transitionLayerContainer,
          {
            zIndex: _zIndexTransitionLayer,
            opacity: _opacityTransitionLayer,
            transform: [
              {
                translateY: _translateYTransitionLayer,
              },
            ],
          },
        ]}>
        {itemData && (
          <>
            <View style={styles.transitionLayerHeaderContainer}>
              <TapGestureHandler onHandlerStateChange={onTapHandlerStateChange}>
                <AnimatedFontistoIcon
                  name="arrow-left-l"
                  size={25}
                  color="white"
                  style={styles.transitionLayerHeaderArrow}
                />
              </TapGestureHandler>
              <Text style={styles.transitionLayerHeaderText}>{category}</Text>
              <View
                style={[
                  styles.transitionLayerHeaderHeartContainer,
                  {
                    backgroundColor: itemData?.backgroundColor,
                  },
                ]}>
                <AntDesignIcon name="hearto" size={20} color="white" />
              </View>
            </View>
            <View style={styles.transitionLayerEmptyView} />
            <View style={styles.transitionLayerImagesContainer}>
              {new Array(4).fill(0).map((item, index) => {
                return (
                  <View
                    key={index}
                    style={styles.transitionLayerImageContainer}>
                    <Image
                      style={[styles.transitionLayerImage]}
                      source={itemData?.source}
                      resizeMode="cover"
                    />
                  </View>
                );
              })}
            </View>
          </>
        )}
        <View
          style={[
            styles.divider,
            {
              borderBottomColor: itemData?.backgroundColor,
            },
          ]}
        />
        <DetailSize itemData={itemData} />
      </Animated.View>
    </View>
  );
}

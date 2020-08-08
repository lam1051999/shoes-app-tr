import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/components/Home';
import Cart from '../cart/components/Cart';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const Tabs = createBottomTabNavigator();
export default function BottomTabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          if (route.name === 'Home') {
            return <AntDesignIcon size={25} name="home" color={color} />;
          } else if (route.name === 'Cart') {
            return (
              <AntDesignIcon size={25} name="shoppingcart" color={color} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#F23A64',
        inactiveTintColor: 'grey',
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
        },
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Cart" component={Cart} />
    </Tabs.Navigator>
  );
}

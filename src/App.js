import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './containers/navigators/BottomTabsNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

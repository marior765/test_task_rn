import React from 'react';
import {Button, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './Home';
import Loader from './Loader';
import Item from '../compomemts/Item';

const AppNavigator = createStackNavigator(
  {
    Loader,
    Home,
    Item,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerShown: navigation.state.routeName === 'Item' ? true : false,
      headerTitle: null,
      headerRight: null,
      headerLeft: (
        <View style={{marginLeft: 20}}>
          <Button title="back" onPress={() => navigation.goBack()} />
        </View>
      ),
    }),
  },
);

export default createAppContainer(AppNavigator);

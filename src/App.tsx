import React, {useEffect} from 'react';
import * as rssParser from 'react-native-rss-parser';
import NavigationService from './utils/NavigationService';
import Root from './pages/index';

const App = () => {
  return (
    <Root
      ref={navigationRef =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }
    />
  );
};

export default App;

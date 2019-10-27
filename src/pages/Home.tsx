import React from 'react';
import Container from '../containers/Container';

import {
  NavigationScreenProp,
  NavigationContainer,
  NavigationParams,
} from 'react-navigation';
import {Page} from 'src/utils/interfaces';

const Home: Page<{}> = ({navigation}) => <Container navigation={navigation} />;

export default Home;

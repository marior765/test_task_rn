import React, {useEffect} from 'react';

import NavigationService from '../utils/NavigationService';
import SplashScreen from '../compomemts/SplashScreen';

// export default class Loader extends React.Component {

//     componentDidMount = () => {
//         NavigationService.navigate("Home", {});
//     }

//     render () {
//         return <SplashScreen />
//     }
// }

export default () => {
  useEffect(() => {
    NavigationService.navigate('Home', {});
  }, []);

  return <SplashScreen />;
};

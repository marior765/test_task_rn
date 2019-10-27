import {
  NavigationActions,
  NavigationContainerComponent,
  StackActions,
} from 'react-navigation';
import {createResetAction} from './helpers';

let _navigator: NavigationContainerComponent | null;

const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null,
) => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: {}) => {
  if (!_navigator) return;

  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

const push = (routeName: string, params: {}) => {
  if (!_navigator) return;

  _navigator.dispatch(StackActions.push({routeName, params}));
};

const resetTo = (routeName: string) => {
  if (!_navigator) return;

  _navigator.dispatch(createResetAction(routeName));
};

export default {
  navigate,
  push,
  resetTo,
  setTopLevelNavigator,
};

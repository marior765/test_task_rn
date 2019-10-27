import {NavigationActions, StackActions} from 'react-navigation';

export const createResetAction = (routeName: string) =>
  StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({routeName})],
  });

export const getDate = (fullDate: string) => {
  const converted = new Date(fullDate);
  return `${converted.getDate()}.${converted.getMonth()}.${converted.getFullYear()}`;
};

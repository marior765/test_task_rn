import {FC} from 'react';
import {
  NavigationScreenProp,
  NavigationContainer,
  NavigationParams,
} from 'react-navigation';

export type Page<P> = FC<
  Readonly<
    P & {
      navigation: NavigationScreenProp<NavigationContainer, NavigationParams>;
    }
  >
>;

export type Container<P> = FC<Readonly<P>>;

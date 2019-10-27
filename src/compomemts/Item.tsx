import React, {memo} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {Card} from 'react-native-elements';

import {getDate} from '../utils/helpers';
import {Page} from 'src/utils/interfaces';

interface Props {
  title: string;
  uri: string;
  date: string;
  onPress: () => void;
}

const Item: Page<Props> = memo(
  ({title, uri, date, onPress, navigation}) => {
    const navProps = {
      title: navigation.getParam('title'),
      uri: navigation.getParam('uri'),
      date: navigation.getParam('date'),
      collection: navigation.getParam('collection'),
    };

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Card
          title={title || navProps.title}
          image={
            navProps.collection
              ? 
              navProps.collection.map(
                  (i: {url: string; length: string; mimeType: string}) =>
                    ({uri: i.url}),
                )
              : {uri: uri || navProps.uri}
          }
          >
          <Text>{getDate(date || navProps.date)}</Text>
        </Card>
      </TouchableWithoutFeedback>
    );
  },
  (p, n) => Object.is(p, n),
);

export default Item;

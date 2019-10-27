import React, {useState, useEffect, FC} from 'react';
import {FlatList} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import {
  NavigationScreenProp,
  NavigationContainer,
  NavigationParams,
} from 'react-navigation';

import Item from '../compomemts/Item';

interface Props {
  navigation: NavigationScreenProp<NavigationContainer, NavigationParams>;
}

const Container: FC<Readonly<Props>> = ({navigation}) => {
  const [data, setData] = useState<rssParser.FeedItem[]>([]);

  useEffect(() => {
    fetch('https://news.tut.by/rss/all.rss')
      .then(r => r.text())
      .then(responseData => rssParser.parse(responseData))
      .then(r => {
        setData(r.items);
      });
  }, []);

  return (
    <FlatList
      data={data}
      removeClippedSubviews
      keyExtractor={item => item.title}
      renderItem={({item}) => (
        <Item
          navigation={navigation}
          onPress={() =>
            navigation.navigate('Item', {
              title: item.title,
              uri: item.enclosures[0].url,
              date: item.published,
              collection: item.enclosures,
            })
          }
          title={item.title}
          uri={item.enclosures[0].url}
          date={item.published}
        />
      )}
    />
  );
};

export default Container;

import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size={50} style={{alignSelf: 'center'}} />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

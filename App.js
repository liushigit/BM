import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from './src/components/Product'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Product name="火腿肠" description="新鲜的鸡蛋" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 24,
    paddingLeft: 8,
    paddingRight: 8
  },
});

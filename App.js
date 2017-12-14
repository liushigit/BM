// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Product from './src/components/Product'
import CartItem from './src/components/CartItem'
import Toggler from './src/components/Toggler'
import ProductRow from './src/components/ProductRow'
import ProductListScreen from './src/screens/ProductListScreen'
import ProductListStack from './src/navigation/ProductListStack'

// <View style={styles.container}>
// <Product name="火腿肠" description="新鲜的鸡蛋" />
// <CartItem />
// </View>

export default class App extends React.Component<any> {
  render() {
    return <ProductListStack />
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
  }
})

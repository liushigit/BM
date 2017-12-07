// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Product from './src/components/Product'
import CartItem from './src/components/CartItem'
import Toggler from './src/components/Toggler'

// <View style={styles.container}>
// <Product name="火腿肠" description="新鲜的鸡蛋" />
// <CartItem />
// </View>

export default class App extends React.Component<any> {
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Toggler isEnabled={false} onToggle={() => {}} />
      </View>
    )
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

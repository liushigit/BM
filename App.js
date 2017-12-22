// @flow
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Product from './src/components/Product'
import CartItem from './src/components/CartItem'
import Toggler from './src/components/Toggler'
import ProductRow from './src/components/ProductRow'
import ProductListScreen from './src/screens/ProductListScreen'
import ProductListStack from './src/navigation/ProductListStack'
import LongPressButton from './src/components/LongPressButton'

export default class App extends React.Component<any> {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          flex: 1
        }}
      >
        <View style={{ backgroundColor: 'yellow' }}>
          <Text>Good</Text>
        </View>
        <View style={{ backgroundColor: 'cyan' }}>
          <Text>Ugly</Text>
        </View>
        <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'magenta' }}>
            <Text>Bad</Text>
          </View>
        </View>
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

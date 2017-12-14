import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import ProductRow from '../components/ProductRow'

class Separator extends Component {
  render() {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#CED0CE'
        }}
      />
    )
  }
}

export default class ProductListScreen extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: 'a', name: 'Xiaomi 1', price: '100.00' },
            { key: 'b', name: 'Xiaomi 2', price: '200.00' },
            { key: 'c', name: 'Xiaomi 3', price: '300.00' }
          ]}
          renderItem={({ item }) => <ProductRow name={item.name} price={item.price} />}
          containerStyle={{ borderBottomWidth: 0 }}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

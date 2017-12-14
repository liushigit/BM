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
  _keyExtractor = undefined
  _onPressItem = id => {
    this.props.navigation.navigate('ProductDetail')
  }

  _renderItem = ({ item }) => {
    return <ProductRow name={item.name} onPressItem={this._onPressItem} price={item.price} />
  }

  render() {
    return (
      <View style={{}}>
        <FlatList
          data={[
            { key: 'a', name: 'Xiaomi 1', price: '100.00' },
            { key: 'b', name: 'Xiaomi 2', price: '200.00' },
            { key: 'c', name: 'Xiaomi 3', price: '300.00' }
          ]}
          renderItem={this._renderItem}
          containerStyle={{ borderBottomWidth: 0 }}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

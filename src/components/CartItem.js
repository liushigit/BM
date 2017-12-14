import React, { Component } from 'react'

import { Button, View, Text, Image } from 'react-native'

class CartItem extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'yellow',
          paddingTop: 4,
          paddingBottom: 4
        }}
      >
        <Text>移动硬盘</Text>
        <Text>2</Text>
        <Text>10元</Text>
      </View>
    )
  }
}

export default CartItem

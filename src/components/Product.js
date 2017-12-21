import React, { Component } from 'react'

import { Button, View, Text, Image } from 'react-native'

class Product extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          backgroundColor: 'yellow'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'green'
          }}
        >
          <Image
            style={{
              width: 200,
              maxHeight: 150,
              backgroundColor: 'blue'
            }}
            /* TODO: this should be dynamic */
            source={require('../../images/a.png')}
            resizeMode="contain"
          />
          <View style={{ padding: 8, backgroundColor: 'red' }}>
            <Text
              style={{
                fontSize: 22,
                lineHeight: 24
              }}
            >
              {this.props.name}
            </Text>
            <Text style={{}}>10元/斤</Text>
          </View>
        </View>
        <Text style={{ backgroundColor: 'red' }}>商品描述</Text>
        <Text>{this.props.description}</Text>
      </View>
    )
  }
}

export default Product

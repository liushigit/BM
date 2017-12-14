// @flow
import React, { Component } from 'react'
import { Text, View } from 'react-native'

type Props = {
  name: string,
  price: string
}

export default class ProductRow extends Component<Props> {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ backgroundColor: 'red' }}> {this.props.name} </Text>
        <Text style={{ backgroundColor: 'blue' }}> {this.props.price} </Text>
      </View>
    )
  }
}

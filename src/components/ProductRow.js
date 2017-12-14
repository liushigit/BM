// @flow
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
  name: string,
  price: string
}

const ROW_HEIGHT = 56

const styles = StyleSheet.create({
  rowText: { height: ROW_HEIGHT, lineHeight: ROW_HEIGHT }
})

export default class ProductRow extends Component<Props> {
  render() {
    return (
      <View
        style={{
          height: ROW_HEIGHT,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text> {this.props.name} </Text>
        <Text> {this.props.price} </Text>
      </View>
    )
  }
}

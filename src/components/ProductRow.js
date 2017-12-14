// @flow
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

type Props = {
  name: string,
  price: string,
  onPressItem: (id: string) => {}
}

const ROW_HEIGHT = 56

const styles = StyleSheet.create({
  rowText: { height: ROW_HEIGHT, lineHeight: ROW_HEIGHT }
})

export default class ProductRow extends Component<Props> {
  _onPressItem = () => {
    const id = this.props.name
    this.props.onPressItem(id)
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPressItem}>
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
      </TouchableHighlight>
    )
  }
}

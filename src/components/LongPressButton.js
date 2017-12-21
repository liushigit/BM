import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class LongPressButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  _onLongPress = () => {
    const oldState = this.state
    this.setState({
      ...oldState,
      showMenu: true
    })
  }
  render() {
    return (
      <TouchableOpacity onLongPress={this._onLongPress} style={{ backgroundColor: 'yellow' }}>
        <Text>Long Press This </Text>
        {this.state.showMenu && (
          <View
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              left: 20,
              top: 20
            }}
          >
            <Text>Hello</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }
}

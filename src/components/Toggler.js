// @flow
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

type Props = {
  isEnabled: boolean,
  onPress: (isEnabled: boolean) => void
}

const styles = StyleSheet.create({
  basic: {
    borderStyle: 'solid',
    borderRadius: 16 / 2,
    borderWidth: 1,
    width: 16,
    height: 16,
    borderColor: 'red'
  },
  isEnabled: {
    backgroundColor: 'red'
  }
})

export default class Toggler extends Component<Props, Props, any> {
  static defaultProps: Object = {
    isEnabled: false,
    onPress: undefined
  }

  constructor(props: Props) {
    super(props)
    this.state = {
      isEnabled: this.props.isEnabled
    }
  }

  onPress = () => {
    const isEnabled = this.state.isEnabled

    if (this.props.onPress !== undefined) {
      this.props.onPress(!isEnabled)
    }
    // Don't do this!!!
    // this.state.isEnabled = !isEnabled
    // Use setState()!
    this.setState({ isEnabled: !isEnabled })
  }

  render() {
    const s = this.state.isEnabled ? [styles.basic, styles.isEnabled] : styles.basic

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={s} />
      </TouchableWithoutFeedback>
    )
  }
}
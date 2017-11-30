import React, { Component,  } from 'react'
import { 
    Text, View, 
         TouchableNativeFeedback,
         StyleSheet, 
         TouchableWithoutFeedback 
} from 'react-native';

const styles = StyleSheet.create({
    basic: {
        borderStyle: "solid",
        borderRadius: 16/2,
        borderWidth: 1,
        width: 16,
        height: 16,
        borderColor: 'red'
    },
    isEnabled: {
        backgroundColor: 'red'
    }
})


export default class Toggler extends Component {

  constructor(props) {
    super(props)
    this.state = {
        isEnabled: false
    }
  }

  onPress= () => {
    const isEnabled = this.state.isEnabled
    // Don't do this!!!
    // this.state.isEnabled = !isEnabled
    // Use setState()!
    this.setState({isEnabled: !isEnabled})
  }

  render() {
    const s = this.state.isEnabled ? 
        [styles.basic, styles.isEnabled] : styles.basic
    
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={s}>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
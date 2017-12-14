import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { StackNavigator } from 'react-navigation'
import ProductListScreen from '../screens/ProductListScreen'
import Product from '../components/Product'

// export default class componentName extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

const ProductListStack = StackNavigator(
  {
    ProductList: {
      screen: ProductListScreen
    },
    ProductDetail: {
      path: 'products/:id',
      screen: Product
    }
  },
  { initialRouteName: 'ProductList' }
)

export default ProductListStack

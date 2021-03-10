import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class A extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='a'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

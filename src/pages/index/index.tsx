import Taro from '@tarojs/taro'
import React from 'react' 
import { useAsyncEffect } from '../../utils/custom_hooks'
import { View } from '@tarojs/components'


function Index () {

  useAsyncEffect(async () => {

  },[])

  return (
    <View className='index'>你好呀</View>
  )
}

export default Index
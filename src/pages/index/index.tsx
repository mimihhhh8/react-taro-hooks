// import Taro, from '@tarojs/taro'
import React, { useState } from 'react'
// 取存在reducer中的值
import { useDispatch, useSelector } from 'react-redux'
import { View } from '@tarojs/components'
// import { useAsyncEffect } from '@/src/utils/custom_hooks'
import { AtInput, AtButton } from 'taro-ui'
import { login } from '../../actions/login'

import './index.scss'

function Index() {
  const [mobile, changeMobile] = useState<string>('18500088544')
  const [code, changeCode] = useState<string>('1111')
  // pageState 拿到当前页面reducer中的值
  const pageState = useSelector((state: any) => state)
  console.log('pageState: ', pageState);
  // dispatch 派发一个action（派发用户的行为，=》掉服务）
  const dispatch = useDispatch()



  const mobileChange = (val) => {
    changeMobile(val)
  }
  const codeChange = (val) => {
    changeCode(val)
  }

  function haandleLogin() {
    let data = {
      phone: mobile,
      safe_code: code
    }
    dispatch(login(data, () => {
      console.log(232)
    }, () => { }))
  }
  console.log(code.length)
  return (
    <View className='index'>
      {/* 背景图 */}
      <View className='m-loginbg'>
        {/* 欢迎登录 */}
        <View className='m-title'>欢迎登录</View>

        {/* 登录 */}
        <View className='m-login-input'>
          <AtInput
            name='mobile'
            className='mobile_input'
            value={mobile}
            type='number'
            placeholder='请输入手机号'
            error={(/^1[^12]\d{9}$/gi).test(mobile) ? false : true}
            maxlength={11}
            onChange={mobileChange}
          />
          <AtInput
            name='code'
            className='mobile_input'
            type='number'
            placeholder='验证码'
            value={code}
            error={code.length !== 4 ? true : false}
            onChange={codeChange}
            maxlength={4}
          >
            <View style={{ fontSize: '16px' }}>发送验证码</View>
          </AtInput>
          <AtButton type='primary' size='normal' className='loginButton' onClick={haandleLogin}>立即登录</AtButton>
        </View>
      </View>


    </View>
  )
}

export default Index
import React from 'react' 
import Taro from '@tarojs/taro'
import { View} from '@tarojs/components'
import { useAsyncEffect } from '@/src/utils/custom_hooks'
import { AtInput,AtButton }  from 'taro-ui'
import {login} from '../../actions/login'
import {useDispatch,useSelector} from 'react-redux'
import './index.scss'

function Index () {
  const pageState=useSelector((state:any)=>state)
  const dispatch = useDispatch()
  console.log(pageState,'satte')
  useAsyncEffect(async () => {
    console.log('useeffect方发fffff')
  },[])

  const mobileChange = ()=>{

  }
  const codeChange = ()=>{

  }

  function haandleLogin(){
    let data ={
      phone:'17811111111',
      safe_code:'1111'
    }
    dispatch(login(data))
  }

  return (
    <View className='index'>
      {/* 背景图 */}
      <View className='m-loginbg'>
        {/* 欢迎登录 */}
        <View className='m-title'>欢迎登录</View>

        {/* 登录 */}
        <View className='m-login-input'>
          <AtInput
            className='mobile_input'
            name='value1'
            type='text'
            placeholder='请输入手机号'
            onChange={mobileChange}
          />
          <AtInput
            className='mobile_input'
            type='text'
            maxLength='4'
            placeholder='验证码'
            value=''
            onChange={codeChange}
          >
            发送验证码
      </AtInput>
          <AtButton type='primary' size='normal' 	className='loginButton' onClick={haandleLogin}>立即登录</AtButton>
        </View>
      </View>
    

    </View>
  )
}

export default Index      
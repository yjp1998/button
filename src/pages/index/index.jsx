import React, { Component } from 'react'
import { View } from '@tarojs/components'
import RButton from '../../components/Button/index'
import './index.scss'

export default class Index extends Component {
  onReady() {
    console.log('done')
  }

  render () {
    return (
      <View>
        <RButton>default</RButton>
        <RButton type='primary'>primary</RButton>
        <RButton type='ghost'>primary</RButton>
        <RButton type='warning'>warn</RButton>
        <RButton disabled>disabled</RButton>

        <RButton size='small'>按钮</RButton>
        <RButton type='primary' size='small'>按钮</RButton>
        <RButton type='primary' size='small' disabled>按钮</RButton>
        <RButton type='ghost' size='small'>按钮</RButton>
        <RButton type='ghost' size='small' disabled>按钮</RButton>
        <RButton type='warning' size='small'>按钮</RButton>
        <RButton type='warning' size='small' disabled>按钮</RButton>
        <RButton size='small' disabled>按钮</RButton>


        <RButton size='large'>按钮</RButton>
        <RButton type='primary' size='large'>按钮</RButton>
        <RButton type='ghost' size='large'>按钮</RButton>
        <RButton type='warning' size='large'>按钮</RButton>
        <RButton size='large' disabled>按钮</RButton>
      </View>
    )
  }
}

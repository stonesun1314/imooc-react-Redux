import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile'

class Register extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      type:'genius'   //或者boss
    }
  }


  render(){

    const RadioItem = Radio.RadioItem

    return (
      <div>
        <Logo></Logo>
        <h2>我是注册页面</h2>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem checked={this.state.type=='genius'} >牛人</RadioItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem checked={this.state.type=='boss'} >BOSS</RadioItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
          <Button type= "primary" onClick={this.register} >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register

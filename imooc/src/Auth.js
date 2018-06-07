import React from 'react'
import {connect} from 'react-redux'
import {login,logout} from './Auth.redux'
import {Redirect} from 'react-router-dom';
import axios from 'axios'

//两个reducers 每个reducers都有一个state
//合并reducer
@connect(
  state=>state.auth,
  {login}
)
class Auth extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    axios.get('/data')
    .then(res=>{
      console.log(res);
      if(res.status==200){
        this.setState({data:res.data});
      }
    })
  }

  render(){
    return (
      <div>
      {this.props.isAuth ? <Redirect to="./dashboard" ></Redirect> : null }
      <h2>你没有权限，需要登录才能看</h2>
      <button onClick = {this.props.login} >登录</button>
      </div>


   )
  }
}


export default Auth

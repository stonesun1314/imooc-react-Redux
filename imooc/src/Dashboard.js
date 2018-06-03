import React from 'react'
import {Route,Link,Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import App from './App';
import {logout} from './Auth.redux'

function Erying() {
  return (<h2>二营</h2>)
};
function Qibinglian() {
  return (<h2>骑兵连</h2>)
};

@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props);

    const redirectToLogin = <Redirect to="/login"></Redirect>
    const App = (
      <div>
      <h1>独立团</h1>
      <button onClick={this.props.logout} >登出</button>
        <ul>
          <li>
            <Link to="/dashboard/">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
        <Route path="/dashboard/"  exact component = {App}></Route>
        <Route path="/dashboard/erying" component = {Erying}></Route>
        <Route path="/dashboard/qibinglian" component = {Qibinglian}></Route>
        </Switch>



      </div> )
    return this.props.isAuth ? App : redirectToLogin;
  }
}


export default Dashboard

import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link,Redirect} from 'react-router-dom';
import App from './App';
import { counter } from './index.redux';


const store = createStore(counter, compose(
  applyMiddleware(thunk),   // 开始redux-thunk中间件的服务
  window.devToolsExtension ? window.devToolsExtension() : () => {},
));

function Erying() {
  return (<h2>二营</h2>)
};
function Qibinglian() {
  return (<h2>骑兵连</h2>)
};

class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props);
    return <h2>测试组件 {this.props.match.params.location}</h2>

  }
}

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/" >一营</Link>
    </li>
    <li>
      <Link to="/erying" >二营</Link>
    </li>
    <li>
      <Link to="/qibinglian" >骑兵连</Link>
    </li>
  </ul>

  <Route path="/" exact component={App} ></Route>
  <Route path="/erying" component={Erying} ></Route>
  <Route path="/qibinglian" component={Qibinglian} ></Route>
  <Route to="/:location" component = {Test} ></Route>
  {/* //<Redirect to="/" component = {Test} ></Redirect> */}
  </div>
    </BrowserRouter>

   </Provider>),
  document.getElementById('root'),
);

// render();

// store.subscribe(render);

// import { createStore} from 'redux';
// //新建Store
// //通过reducer简历
// //根据老的state和action生成新的state

// function counter(state=0,action) {
//   switch (action.type) {
//     case '加机关枪':
//       return state+1
//       break;
//     case '减机关枪':
//       return state-1
//       break;
//     default:
//       return 10;
//       break;
//   }
// }
// //1 新建store
// const store = createStore(counter);
// const init = store.getState();
// console.log(init);

// function listerner() {
//   const current = store.getState()
//   console.log(`现在有机枪${current}把`);
// }
// store.subscribe(listerner)

// //派发时间 传递action
// store.dispatch({type:'加机关枪'});
// store.dispatch({type:'加机关枪'});
// store.dispatch({type:'减机关枪'});

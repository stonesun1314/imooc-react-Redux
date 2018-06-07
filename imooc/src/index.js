import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Link,Redirect} from 'react-router-dom';

import reducers from './reducer'
import Switch from 'react-router-dom/Switch';
import Auth from './Auth.js'
import Dashboard from './Dashboard.js'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),   // 开始redux-thunk中间件的服务
  window.devToolsExtension ? window.devToolsExtension() : () => {},
));

console.log(store.getState());


//登录
//没有登录信息 同意跳转login
//页面  导航+显示+注销
//一营
//二营
//骑兵连
//router+redux
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
    <div>
    <Switch>
  <Route path="/login" exact component={Auth} ></Route>
  <Route path="/dashboard" component={Dashboard} ></Route>
  <Redirect to="/dashboard"></Redirect>
  </Switch>
    </div>

    </BrowserRouter>

   </Provider>),
  document.getElementById('root')
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

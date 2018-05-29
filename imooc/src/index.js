import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import { counter } from './index.redux';


const store = createStore(counter, compose(
  applyMiddleware(thunk),   // 开始redux-thunk中间件的服务
  window.devToolsExtension ? window.devToolsExtension() : () => {},
));

//Provider包整个一层，把store传入App
ReactDom.render(
  (<Provider store={store}>
	  <App />
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

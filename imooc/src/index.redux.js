

const ADD_GUN = '加机关枪'
const REMOVE_GUN = '减机关枪'

//reducer
export function counter(state=0,action) {
  switch (action.type) {
    case '加机关枪':
      return state+1
      break;
    case '减机关枪':
      return state-1
      break;
    default:
      return 10;
      break;
  }
}

//action creator
export function addGun() {
  return {type:ADD_GUN}
}

export function removeGun() {
  return {type:REMOVE_GUN}
}

export function addGunAsync(){
  return dispatch=>{
setTimeout(() => {
  dispatch(addGun())
}, 2000);
  }
}

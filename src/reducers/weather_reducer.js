import { FETCH_WEATHER } from '../actions/index' //for type checking but verbose

export default function(state = [], action) {
  console.log('Action Recieved', action)
  switch (action.type) {
  case FETCH_WEATHER:
    //dont mutate state, return new instance:
    // return state.concat([action.payload.data])
    // return state + [ action.payload.data ]
    return [action.payload.data, ...state]
  }
  return state
}

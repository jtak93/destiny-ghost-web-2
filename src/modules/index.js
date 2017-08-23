import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer from '../Counter/reducer'

export default combineReducers({
  routing: routerReducer,
  counter: counterReducer,
})

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counterReducer from '../Counter/reducer'
import authReducer from '../AuthRedirectPage/reducer'

export default combineReducers({
  routing: routerReducer,
  counter: counterReducer,
  auth: authReducer,
})

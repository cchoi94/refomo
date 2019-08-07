import {applyMiddleware, compose, createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import refpostReducer from './reducers/refPost-reducer'
import userReducer from './reducers/user-reducer'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  refPosts: refpostReducer,
  user: userReducer
})

const allStoreEnhancers = compose (
  composeWithDevTools(applyMiddleware(thunk))
)

const store = createStore(
  allReducers,
  allStoreEnhancers
);

export default store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import travelData from './reducers'

const store: Function = createStore(
  travelData,
  compose(applyMiddleware(thunk))
)

export default store

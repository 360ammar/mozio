import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import travelData from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store: Function = createStore(
  travelData,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

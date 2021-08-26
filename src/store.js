import {createStore,applyMiddleware} from "redux";
import rootreducers from './reducers/index';
import thunk from "redux-thunk"
const store =createStore(rootreducers,
  {},
  applyMiddleware(thunk))


export default store;
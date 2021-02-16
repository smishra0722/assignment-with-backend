import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
 const middleware = [thunk, logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

export default store;
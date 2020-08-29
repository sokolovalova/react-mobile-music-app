import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer';

const composedEnhancers = composeWithDevTools()

const store = createStore(rootReducer, undefined, composedEnhancers)

export default store;

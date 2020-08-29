import { combineReducers } from 'redux';

import countReducer from './countReducer';
import theme from './countReducer';

export default combineReducers({
  registration_btn_text: countReducer,
  themeApp: theme
})
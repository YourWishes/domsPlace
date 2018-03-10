'use strict';
import {combineReducers} from 'redux';

//Import Reducers
import language from './language';

//Create our Reducer
const rootReducer = combineReducers({
  language
});

//Export the root reducer
export default rootReducer;

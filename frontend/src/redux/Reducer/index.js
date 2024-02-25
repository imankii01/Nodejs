// reducers.js
import { combineReducers } from 'redux';
import { loginReducer, singupReducer } from './comman';

const allReducers = combineReducers({
   loginReducer,
   singupReducer
});

const rootReducer = (state, action) => {
   
   
   return allReducers(state, action);
};
export default rootReducer;
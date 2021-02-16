import {combineReducers} from 'redux';

import formReducer from './form/form.reducer';
export default combineReducers({
    form: formReducer
});
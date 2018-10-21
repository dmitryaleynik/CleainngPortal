import {combineReducers} from 'redux';
import signIn from './signIn';
import security from './security';

const rootReducer = combineReducers({
    security,
});

export default rootReducer;
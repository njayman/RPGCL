import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import adminAuthReducer from './AdminAuthReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    adminauth: adminAuthReducer
});

export default rootReducer;
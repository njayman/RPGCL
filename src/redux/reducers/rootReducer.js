import { combineReducers } from 'redux';
import authReducer from './AuthReducers';
import adminAuthReducer from './AdminAuthReducer'
import { formReducer } from './FormReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    adminauth: adminAuthReducer,
    form: formReducer
});

export default rootReducer;
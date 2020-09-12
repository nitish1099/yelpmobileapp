import { combineReducers } from 'redux';
import StoreReducer from './StoreReducer'

const rootReducer = combineReducers({
    stores: StoreReducer
});

export default rootReducer;

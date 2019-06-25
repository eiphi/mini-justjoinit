import {combineReducers} from 'redux';
import offersReducer from './offersReducer'
import technologyReducer from './technologyReducer';


export default combineReducers({
    offers: offersReducer,
    filters: technologyReducer
})
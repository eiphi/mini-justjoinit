import {combineReducers} from 'redux';
import offersReducer from './offersReducer'
import technologyReducer from './technologyReducer';
import selectOfferReducer from './selectOfferReducer';


export default combineReducers({
    offers: offersReducer,
    filters: technologyReducer,
    selectedOffer: selectOfferReducer
})
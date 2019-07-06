import {combineReducers} from 'redux';
import offersReducer from './offersReducer'
import technologyReducer from './technologyReducer';
import selectOfferReducer from './selectOfferReducer';
import hoverOfferReducer from './hoverOfferReducer';


export default combineReducers({
    offers: offersReducer,
    filters: technologyReducer,
    selectedOffer: selectOfferReducer,
    hoveredOffer: hoverOfferReducer
})
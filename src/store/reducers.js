import { combineReducers } from 'redux';
import cards from '../components/cardsList/cardslist.reducer';
import filters from '../components/filterBar/filterBar.reducer';

const rootReducer = combineReducers({
    cards,
    filters
});

export default rootReducer;
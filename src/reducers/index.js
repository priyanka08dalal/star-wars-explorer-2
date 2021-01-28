  
import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';
import moviesReducer from './moviesReducer'
import moviesDetailsReducer from './moviesDetailsReducer'
import personDetailsReducer from './personDetailsReducer'
import planetsReducer from './planetReducer'
import planetsDetailsReducer from './planetDetailsReducer'
// import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    peopleReducer: peopleReducer,
    moviesReducer: moviesReducer,
    moviesDetailsReducer: moviesDetailsReducer,
    personDetailsReducer: personDetailsReducer,
    planetsReducer:planetsReducer,
    planetsDetailsReducer: planetsDetailsReducer,
//   searchState: searchReducer,
});

export default rootReducer;
import { combineReducers } from 'redux';
import contributorsReducers from './contributorsReducers';
import loadingReducer from './loadingReducer';
import sortReducer from './sortReducer';

const allReducers = combineReducers({
   contributors: contributorsReducers,
   sortArray: sortReducer,
});

export default allReducers;

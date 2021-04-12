import { combineReducers } from 'redux';
import contributorsReducers from './contributorsReducers';
import paginatorReducer from './paginatorReducer';

const allReducers = combineReducers({
   contributors: contributorsReducers,
   paginator: paginatorReducer,
});

export default allReducers;

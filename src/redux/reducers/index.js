import { combineReducers } from 'redux';
import contributorsReducers from './contributorsReducers';

const allReducers = combineReducers({
   contributors: contributorsReducers,
});

export default allReducers;

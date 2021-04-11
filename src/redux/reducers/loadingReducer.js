import { LOADING } from '../actions/types';

const loadingReducer = (state = false, action) => {
   switch (action.name) {
      case LOADING:
         return !state;
      default:
         return false;
   }
};

export default loadingReducer;

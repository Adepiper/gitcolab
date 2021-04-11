import {
   FILTER_BY_FOLLOWERS,
   FILTER_BY_GISTS,
   FILTER_BY_REPOS,
} from '../actions/types';

const sortReducer = (state = [], action) => {
   switch (action.name) {
      case FILTER_BY_FOLLOWERS:
         return [...state, action.payload];
      case FILTER_BY_GISTS:
         return [...state, action.payload];
      case FILTER_BY_REPOS:
         return [...state, action.payload];
      default:
         return state;
   }
};

export default sortReducer;

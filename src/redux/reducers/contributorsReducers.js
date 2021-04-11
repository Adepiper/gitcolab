import {
   GET_CONTRIBUTOR_REPO,
   GET_REPO_DETAILS,
   GIT_CONTRIBUTOR,
   GIT_CONTRIBUTORS,
} from '../actions/types';

const initialState = {
   contributors: [],
   contributor: {},
   contributorRepo: [],
   repoDetails: {},
};

const contributorsReducers = (state = initialState, action) => {
   switch (action.type) {
      case GIT_CONTRIBUTORS:
         return {
            ...state,
            contributors: action.payload,
         };
      case GIT_CONTRIBUTOR:
         return {
            ...state,
            contributor: action.payload,
         };
      case GET_CONTRIBUTOR_REPO:
         return {
            ...state,
            contrinutorRepo: action.payload,
         };
      case GET_REPO_DETAILS:
         return {
            ...state,
            repoDetails: action.payload,
         };
      default:
         return state;
   }
};

export default contributorsReducers;

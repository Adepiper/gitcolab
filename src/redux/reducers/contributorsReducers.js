import {
   FILTER_BY_FOLLOWERS,
   FILTER_BY_GISTS,
   FILTER_BY_REPOS,
   GET_CONTRIBUTOR_REPO,
   GET_REPO_DETAILS,
   GIT_CONTRIBUTOR,
   GIT_CONTRIBUTORS,
   LOADING,
} from '../actions/types';

const initialState = {
   contributors: [],
   contributor: {},
   contributorRepo: [],
   repoDetails: {},
   loading: false,
};

const contributorsReducers = (state = initialState, action) => {
   switch (action.type) {
      case LOADING:
         return {
            ...state,
            loading: true,
         };
      case GIT_CONTRIBUTORS:
         return {
            ...state,
            contributors: action.payload,
            loading: false,
         };
      case GIT_CONTRIBUTOR:
         return {
            ...state,
            contributor: action.payload,
            loading: false,
         };
      case GET_CONTRIBUTOR_REPO:
         return {
            ...state,
            contrinutorRepo: action.payload,
            loading: false,
         };
      case GET_REPO_DETAILS:
         return {
            ...state,
            repoDetails: action.payload,
            loading: false,
         };
      case FILTER_BY_FOLLOWERS:
         return {
            ...state,
            contributors: action.payload,
            loading: false,
         };
      case FILTER_BY_GISTS:
         return {
            ...state,
            contributors: action.payload,
            loading: false,
         };
      case FILTER_BY_REPOS:
         return {
            ...state,
            contributors: action.payload,
            loading: false,
         };
      default:
         return state;
   }
};

export default contributorsReducers;

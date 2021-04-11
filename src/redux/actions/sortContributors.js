import {
   FILTER_BY_FOLLOWERS,
   FILTER_BY_GISTS,
   FILTER_BY_REPOS,
   GIT_CONTRIBUTORS,
} from './types';

export const sortingAction = (sortParams, data) => (dispatch) => {
   let sortedData = [];
   console.log(sortParams);
   switch (sortParams) {
      case FILTER_BY_REPOS:
         console.log('repos');
         sortedData = sortByRepos(data);
         break;

      case FILTER_BY_FOLLOWERS:
         console.log('followers');
         sortedData = sortByFollowers(data);
         break;

      case FILTER_BY_GISTS:
         console.log('gists');
         sortedData = sortByGists(data);
         break;

      default:
         sortParams = GIT_CONTRIBUTORS;
         sortedData = data;
   }
   dispatch({
      type: sortParams,
      payload: sortedData,
   });
};

const sortByRepos = (data) => {
   return data.sort((a, b) => {
      return b.public_repos - a.public_repos;
   });
};

const sortByGists = (data) => {
   return data.sort((a, b) => {
      return b.public_gists - a.public_gists;
   });
};

const sortByFollowers = (data) => {
   return data.sort((a, b) => {
      return b.followers - a.followers;
   });
};

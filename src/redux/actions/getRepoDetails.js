import { GET_REPO_DETAILS } from './types';
import { options } from './options';

export const getRepoDetails = (repoArray, id) => (dispatch) => {
   
   dispatch({
      type: GET_REPO_DETAILS,
      payload: repoArray[id],
   });
};

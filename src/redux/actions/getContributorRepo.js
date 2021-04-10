import { GET_CONTRIBUTOR_REPO } from './types';
import { options } from './options';

export const getContributorRepo = (url) => async (dispatch) => {
   try {
      const res = await fetch(url, options);
      const data = await res.json();

      dispatch({
         type: GET_CONTRIBUTOR_REPO,
         payload: data,
      });
   } catch (err) {
      console.log(err);
   }
};

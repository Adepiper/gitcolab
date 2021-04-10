import { GIT_CONTRIBUTOR } from './types';
import { options } from './options';

export const getContributor = (url) => async (dispatch) => {
   try {
      const res = await fetch(url, options);
      const data = await res.json();

      dispatch({
         type: GIT_CONTRIBUTOR,
         payload: data,
      });
   } catch (err) {
      console.log(err);
   }
};

import { GIT_CONTRIBUTOR } from './types';
import { options } from './options';

export const getContributor = (data, id) => async (dispatch) => {
   const filterObject = data.filter((item) => {
      return item.login === id;
   })[0];
   let contributor = { ...filterObject };
   try {
      const res = await fetch(contributor.repos_url, options);
      const responseData = await res.json();
      contributor = { ...contributor, repos: responseData };
      dispatch({
         type: GIT_CONTRIBUTOR,
         payload: contributor,
      });
   } catch (err) {
      console.log(err);
   }
};

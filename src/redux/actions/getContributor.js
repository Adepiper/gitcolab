import { GIT_CONTRIBUTOR } from './types';
import { options } from './options';

export const getContributor = (data, id) => async (dispatch) => {
   const filterObject = data.filter((item) => {
      return item.login === id;
   })[0];
   console.log(filterObject);
   let contributor = { ...filterObject };
   try {
      const res = await fetch(contributor.repos_url);

      const responseData = await res.json();
      console.log(responseData);
      contributor = { ...contributor, repos: responseData };
      dispatch({
         type: GIT_CONTRIBUTOR,
         payload: contributor,
      });
   } catch (err) {
      console.log(err);
   }
};

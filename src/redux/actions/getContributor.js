import { GIT_CONTRIBUTOR } from './types';
import { options } from './options';
import { errorAction } from './errorAction';

export const getContributor = (data, id) => async (dispatch) => {
   let contributor = {};
   let newObject = {};
   const filterObject = data.filter((item) => {
      return item.login === id;
   })[0];
   filterObject
      ? (newObject = filterObject)
      : (newObject = await contributorNotInArray(id));
   contributor = { ...newObject };
   try {
      const res = await fetch(contributor.repos_url, options);
      const responseData = await res.json();
      contributor = { ...contributor, repos: responseData };
      dispatch({
         type: GIT_CONTRIBUTOR,
         payload: contributor,
      });
   } catch (err) {
      dispatch(errorAction());
   }
};

export const contributorNotInArray = (id) => async (dispatch) => {
   let data = {};
   try {
      const res = await fetch(`https://api.github.com/users/${id}`);

      const responseData = await res.json();
      data = { ...responseData };
      return data;
   } catch (err) {
      dispatch(errorAction());
   }
};

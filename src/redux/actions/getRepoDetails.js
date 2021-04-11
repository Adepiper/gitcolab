import { GET_REPO_DETAILS } from './types';
import { options } from './options';

export const getRepoDetails = (data, name) => async (dispatch) => {
   const filterObject = data.filter((item) => {
      return item.name === name;
   })[0];
   let repoDetails = { ...filterObject };
   try {
      const res = await fetch(repoDetails.contributors_url, options);
      const responseData = await res.json();
      repoDetails = { ...repoDetails, contributors: responseData };
      dispatch({
         type: GET_REPO_DETAILS,
         payload: repoDetails,
      });
   } catch (err) {
      console.log(err);
   }
};

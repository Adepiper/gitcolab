import { GET_REPO_DETAILS } from './types';
import { options } from './options';
import { contributorNotInArray } from './getContributor';
import { concatenateArray, getContributorDetails } from './getContributors';

export const getRepoDetails = (data, name, id) => async (dispatch) => {
   let repoDetails = {};
   let filterObject = {};
   if (data) {
      filterObject = data.filter((item) => {
         return item.name === name;
      })[0];
   } else {
      filterObject = await getRepoFromUser(id, name);
   }

   repoDetails = { ...filterObject };
   try {
      const res = await fetch(repoDetails.contributors_url, options);
      const responseData = await res.json();
      const newResponseData = await concatenateArray(responseData);
      repoDetails = { ...repoDetails, contributors: newResponseData };
      dispatch({
         type: GET_REPO_DETAILS,
         payload: repoDetails,
      });
   } catch (err) {
      console.log(err);
   }
};

const getRepoFromUser = async (id, name) => {
   const userDetails = await contributorNotInArray(id);
   console.log(id, name);
   try {
      const res = await fetch(userDetails.repos_url);
      const responseData = await res.json();
      const filteredArray = responseData.filter(
         (item) => item.name === name
      )[0];
      console.log(filteredArray);
      return filteredArray;
   } catch (err) {
      console.log(err);
   }
   return userDetails;
};

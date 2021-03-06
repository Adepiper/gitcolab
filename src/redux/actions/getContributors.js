import { GIT_CONTRIBUTORS } from './types';
import { options } from './options';
import { errorAction } from './errorAction';

const getAllrepos = async (data) => {
   let contributorsArray = [];
   for (const element of data) {
      try {
         const res = await fetch(element.contributors_url, options);
         const data = await res.json();
         contributorsArray = [...contributorsArray, ...data];
      } catch (err) {
         errorAction();
      }
   }
   return concatenateArray(contributorsArray);
};

export const concatenateArray = async (data) => {
   let object = {};
   let finalData = [];
   data.forEach((item) => {
      object[item.id] = item;
   });

   const objectArray = Object.values(object);
   for (const item of objectArray) {
      const newData = await getContributorDetails(item.url);
      finalData = [...finalData, newData];
   }
   return finalData;
};

export const getContributorDetails = async (url) => {
   try {
      const res = await fetch(url, options);
      const data = await res.json();
      return data;
   } catch (err) {
      errorAction();
   }
};

export const getContributors = () => async (dispatch) => {
   try {
      const res = await fetch(
         `https://api.github.com/orgs/Angular/repos`,
         options
      );
      const data = await res.json();
      const getAllContributorsData = await getAllrepos(data);
      dispatch({
         type: GIT_CONTRIBUTORS,
         payload: getAllContributorsData,
      });
   } catch (err) {
      dispatch(errorAction());
   }
};

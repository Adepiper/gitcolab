import { CURRENT_PAGE, PAGINANTED_DATA, TOTAL_COUNT } from './types';

export const setPage = (number) => (dispatch) => {
   dispatch({
      type: CURRENT_PAGE,
      payload: number,
   });
};

export const setTotalCount = (data, per_page) => (dispatch) => {
   const pageCount = Math.ceil(data.length / per_page);
   return {
      type: TOTAL_COUNT,
      payload: pageCount,
   };
};
export const setPaginatedData = (contributors, per_page) => (dispatch) => {
   const paginatedData = contributors.slice(0, per_page);
   console.log(paginatedData);
   return {
      type: PAGINANTED_DATA,
      payload: paginatedData,
   };
};

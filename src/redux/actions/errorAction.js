import { ERROR } from './types';

export const errorAction = (error) => {
   let errorMessage = '';
   error ? (errorMessage = error) : (errorMessage = `Something went wrong`);
   return {
      type: ERROR,
      payload: errorMessage,
   };
};

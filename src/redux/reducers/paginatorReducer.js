import { act } from 'react-dom/test-utils';
import {
   CURRENT_PAGE,
   PER_PAGE,
   PAGINANTED_DATA,
   TOTAL_COUNT,
} from '../actions/types';

const paginator = {
   paginatedData: [],
   currentPage: 1,
   totalPage: 0,
   per_page: 10,
};

const paginatorReducer = (state = paginator, action) => {
   switch (action.type) {
      case TOTAL_COUNT:
         return {
            ...state,
            totalPage: action.payload,
         };
      case CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload,
         };
      case PAGINANTED_DATA:
         return {
            ...state,
            paginatedData: action.payload,
         };
      case PER_PAGE:
         return {
            ...state,
            per_page: action.payload,
         };

      default:
         return state;
   }
};

export default paginatorReducer;

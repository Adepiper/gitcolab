import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getContributors } from '../redux/actions/getContributors';
import PropTypes from 'prop-types';
import ContributorsList from './ContributorsList';
import { loadingAction } from '../redux/actions/loading';
import Loading from './utilities/Loading';
import { sortingAction } from '../redux/actions/sortContributors';
import {
   FILTER_BY_FOLLOWERS,
   FILTER_BY_GISTS,
   FILTER_BY_REPOS,
} from '../redux/actions/types';
import ErrorTemplate from './utilities/ErrorTemplate';

const Contributors = (props) => {
   const {
      getContributors,
      contributors,
      loading,
      loadingAction,
      sortingAction,
      error,
   } = props;
   useEffect(() => {
      if (contributors.length === 0 || error) {
         loadDataFromServer();
      }
   }, []);
   const sortBy = (params) => {
      loadingAction();
      sortingAction(params, contributors);
   };

   const loadDataFromServer = async () => {
      loadingAction();
      await getContributors();
   };

   const checkError = () =>
      error ? <ErrorTemplate /> : <>{contributorsEL()}</>;

   const contributorsEL = () => (
      <div className='container-fluid search'>
         <div className='container search'>
            <div className='dropdown text-right mt-3'>
               <a
                  className='dropdown-toggle mt-3'
                  href='#'
                  id='Dropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
               >
                  Sort by
               </a>
               <div className='dropdown-menu' aria-labelledby='Dropdown'>
                  <a
                     className='dropdown-item'
                     onClick={() => {
                        sortBy(FILTER_BY_FOLLOWERS);
                     }}
                  >
                     Followers
                  </a>
                  <a
                     className='dropdown-item'
                     onClick={() => {
                        sortBy(FILTER_BY_GISTS);
                     }}
                  >
                     Gists
                  </a>
                  <a
                     className='dropdown-item'
                     onClick={() => {
                        sortBy(FILTER_BY_REPOS);
                     }}
                  >
                     Public Repos
                  </a>
               </div>
            </div>
            <div className='results'>
               <ContributorsList contributors={contributors} />

               {/* <Pagination /> */}
            </div>
         </div>
      </div>
   );
   return <>{loading ? <Loading /> : checkError()}</>;
};

Contributors.propTypes = {
   getContributors: PropTypes.func.isRequired,
   contributors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
   contributors: state.contributors.contributors,
   loading: state.contributors.loading,
   error: state.contributors.error,
});

export default connect(mapStateToProps, {
   getContributors,
   loadingAction,
   sortingAction,
})(Contributors);

import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

const Contributors = (props) => {
   const {
      getContributors,
      contributors,
      loading,
      loadingAction,
      sortingAction,
   } = props;
   useEffect(() => {
      if (contributors.length === 0) {
         loadingAction();
         getContributors();
      }
   }, []);
   const sortBy = (params) => {
      loadingAction();
      sortingAction(params, contributors);
   };

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
            <div class='results'>
               <ContributorsList contributors={contributors} />

               <nav aria-label='Page navigation' class='navigation'>
                  <ul className='pagination'>
                     <li className='page-item'>
                        <a className='page-link' href='#'>
                           1
                        </a>
                     </li>
                     <li className='page-item'>
                        <a className='page-link' href='#'>
                           2
                        </a>
                     </li>
                     <li className='page-item'>
                        <a className='page-link' href='#'>
                           3
                        </a>
                     </li>
                     <li className='page-item'>
                        <a className='page-link' href='#'>
                           4
                        </a>
                     </li>
                     <li className='page-item'>
                        <a className='page-link' href='#'>
                           5
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   );
   return <>{loading ? <Loading /> : contributorsEL()}</>;
};

Contributors.propTypes = {
   getContributors: PropTypes.func.isRequired,
   contributors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
   contributors: state.contributors.contributors,
   loading: state.contributors.loading,
});

export default connect(mapStateToProps, {
   getContributors,
   loadingAction,
   sortingAction,
})(Contributors);

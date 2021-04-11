import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContributors } from '../redux/actions';
import PropTypes from 'prop-types';
import ContributorsList from './ContributorsList';
import { loadingAction } from '../redux/actions/loading';
import Loading from './utilities/Loading';

const Contributors = (props) => {
   const { getContributors, contributors, loading, loadingAction } = props;
   useEffect(() => {
      loadingAction();
      getContributors();
   }, []);

   const contributorsEL = () => (
      <div class='container-fluid search'>
         <div className='container search'>
            <form class='form-inline mx-auto'>
               <input
                  class='form-control mx-auto'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
               />
            </form>
            <div class='dropdown text-center'>
               <a
                  class='dropdown-toggle'
                  href='#'
                  id='Dropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
               >
                  Filters
               </a>
               <div class='dropdown-menu' aria-labelledby='Dropdown'>
                  <a class='dropdown-item' href='#'>
                     Ascending
                  </a>
                  <a class='dropdown-item' href='#'>
                     Descending
                  </a>
               </div>
            </div>
            <div class='results'>
               {contributors.length > 0 ? (
                  <ContributorsList contributors={contributors} />
               ) : (
                  <div>No results</div>
               )}
               <nav aria-label='Page navigation' class='navigation'>
                  <ul class='pagination'>
                     <li class='page-item'>
                        <a class='page-link' href='#'>
                           1
                        </a>
                     </li>
                     <li class='page-item'>
                        <a class='page-link' href='#'>
                           2
                        </a>
                     </li>
                     <li class='page-item'>
                        <a class='page-link' href='#'>
                           3
                        </a>
                     </li>
                     <li class='page-item'>
                        <a class='page-link' href='#'>
                           4
                        </a>
                     </li>
                     <li class='page-item'>
                        <a class='page-link' href='#'>
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

export default connect(mapStateToProps, { getContributors, loadingAction })(
   Contributors
);

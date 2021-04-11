import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContributors } from '../redux/actions/getContributors';
import PropTypes from 'prop-types';
import ContributorsList from './ContributorsList';
import { loadingAction } from '../redux/actions/loading';
import Loading from './utilities/Loading';

const Contributors = (props) => {
   const { getContributors, contributors, loading, loadingAction } = props;
   useEffect(() => {
      if (contributors.length === 0) {
         loadingAction();
         getContributors();
      }
   }, []);

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
                  <a className='dropdown-item' href='#'>
                     Followers
                  </a>
                  <a className='dropdown-item' href='#'>
                     Gists
                  </a>
                  <a className='dropdown-item' href='#'>
                     Public Repos
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

export default connect(mapStateToProps, { getContributors, loadingAction })(
   Contributors
);

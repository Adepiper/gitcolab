import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepoDetails } from '../redux/actions/getRepoDetails';
import { loadingAction } from '../redux/actions/loading';
import ContributorsList from './ContributorsList';
import Loading from './utilities/Loading';

const SingleRepo = (props) => {
   const {
      contributor,
      loading,
      repoDetails,
      getRepoDetails,
      loadingAction,
      match,
   } = props;

   const { name, repo } = match.params;
   useEffect(() => {
      if (repoDetails.name !== repo) {
         loadingAction();
         getRepoDetails(contributor.repos, repo, name);
      }
   }, []);

   const singleRepoEl = () => (
      <>
         <div className='container-fluid '>
            <div className='angular-outline'>
               <div className='bg-darkblue'>
                  <img src='/assets/Angular-1.png' alt='' />
                  <div className='empty blue-bg'></div>
               </div>
            </div>

            <div className='alvo'>
               <div className='alvo-info'>
                  <h3 className='repo-name'>{repoDetails.name}</h3>
                  <span class='date'>Created on: {repoDetails.created_at}</span>
                  <span class='date'>
                     Last Update: {repoDetails.updated_at}
                  </span>
                  <span>Git Url: {repoDetails.git_url}</span>
                  <div className='project-social'>
                     <div>
                        <i className='fab fa-watchman-monitoring'></i>{' '}
                        <span>{repoDetails.watchers}</span>
                     </div>
                     <div>
                        <i className='fas fa-code-branch'></i>{' '}
                        <span>{repoDetails.forks}</span>
                     </div>
                  </div>
               </div>
               <div className='buttons'>
                  <a
                     href={repoDetails.html_url}
                     target='_blank'
                     className='button'
                  >
                     View in Github
                  </a>
               </div>
            </div>
            <div className='contributors-container'>
               <hr />
               <div className='container'>
                  <h3 className='header'>Contributors</h3>
               </div>

               <hr />
               <div className='container'>
                  <div className='results'>
                     <div className='row'>
                        {repoDetails.contributors && (
                           <ContributorsList
                              contributors={repoDetails.contributors}
                           />
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );

   return <>{loading ? <Loading /> : singleRepoEl()}</>;
};

const mapStateToProps = (state) => ({
   contributor: state.contributors.contributor,
   loading: state.contributors.loading,
   repoDetails: state.contributors.repoDetails,
});

export default connect(mapStateToProps, { getRepoDetails, loadingAction })(
   SingleRepo
);

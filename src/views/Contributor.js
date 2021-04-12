import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getContributor } from '../redux/actions/getContributor';
import { loadingAction } from '../redux/actions/loading';
import RepositoriesList from './RepositoriesList';
import Loading from './utilities/Loading';

const Contributor = (props) => {
   const {
      getContributor,
      match,
      contributors,
      contributor,
      loading,
      loadingAction,
   } = props;
   const { name } = match.params;

   useEffect(() => {
      loadingAction();
      getContributor(contributors, name);
   }, []);
   const contributorEL = () => (
      <>
         <div class='container-fluid bg-black-angular'>
            <div class='image'>
               <img src={contributor.avatar_url} alt='' />
            </div>
            <div class='angular'>
               <img src='/assets/Angular-1.png' alt='' />
            </div>
         </div>
         <div class='container-fluid'>
            <div class='content'>
               <div className='row'>
                  <div className='col-lg-3 col-md-5'>
                     <div class='info'>
                        <p class='name'>{contributor.name}</p>
                        <span class='handle'>{contributor.login}</span>
                        <div class='social'>
                           {contributor.twitter_name && (
                              <span class='icon'>
                                 <a href={``}>
                                    <i class='fab fa-twitter'></i>
                                 </a>
                              </span>
                           )}
                        </div>
                        <p class='location'>
                           <span>
                              <i class='fas fa-map-marker-alt'></i>
                           </span>{' '}
                           {contributor.location}
                        </p>
                     </div>
                  </div>
                  <div className='col-lg-9 col-md-7'>
                     <div class='recents'>
                        <div class='heading'>
                           <h2>Repositories</h2>
                        </div>
                        <div className='row'>
                           {contributor.repos && (
                              <RepositoriesList
                                 repos={contributor.repos}
                                 name={contributor.login}
                              />
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
   return <>{loading ? <Loading /> : contributorEL()}</>;
};

const mapStateToProps = (state) => ({
   contributors: state.contributors.contributors,
   contributor: state.contributors.contributor,
   loading: state.contributors.loading,
});

export default connect(mapStateToProps, { getContributor, loadingAction })(
   Contributor
);

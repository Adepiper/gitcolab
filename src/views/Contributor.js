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
         <div className='container-fluid bg-black-angular'>
            <div className='image'>
               <img src={contributor.avatar_url} alt='' />
            </div>
            <div className='angular'>
               <img src='/assets/Angular-1.png' alt='' />
            </div>
         </div>
         <div className='container-fluid'>
            <div className='content'>
               <div className='row'>
                  <div className='col-lg-3 col-md-5'>
                     <div className='info'>
                        <p className='name'>{contributor.name}</p>
                        <span className='handle'>{contributor.login}</span>
                        <div className='social'>
                           {contributor.twitter_name && (
                              <span className='icon'>
                                 <a href={``}>
                                    <i className='fab fa-twitter'></i>
                                 </a>
                              </span>
                           )}
                        </div>
                        <p className='location'>
                           <span>
                              <i className='fas fa-map-marker-alt'></i>
                           </span>{' '}
                           {contributor.location}
                        </p>
                     </div>
                  </div>
                  <div className='col-lg-9 col-md-7'>
                     <div className='recents'>
                        <div className='heading'>
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

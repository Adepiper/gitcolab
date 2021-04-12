import React from 'react';
import { Link } from 'react-router-dom';

const RepositoriesList = (props) => {
   const { repos, name } = props;
   const checkRepoLength = () =>
      repos.length > 0 ? <>{mapThroughRepos}</> : <div>No repository</div>;

   const mapThroughRepos = repos.map((repo) => (
      <div className='col-lg-6' key={repo.id}>
         <Link to={`/contributor/${name}/${repo.name}`} className='button'>
            <div className='project card'>
               <div className='project-header'>
                  <h3>{repo.name}</h3>
               </div>
               <div className='project-info'>
                  <div className='row'>
                     <div className='col-6'>
                        <div className='project-social'>
                           <div>
                              <i className='fab fa-watchman-monitoring'></i>{' '}
                              <span>{repo.watchers}</span>
                           </div>
                           <div>
                              <i className='fas fa-code-branch'></i>{' '}
                              <span>{repo.forks}</span>
                           </div>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='view text-right'>
                           <span>View</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   ));

   return <>{checkRepoLength()}</>;
};

export default RepositoriesList;

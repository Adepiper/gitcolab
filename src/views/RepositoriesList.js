import React from 'react';
import { Link } from 'react-router-dom';

const RepositoriesList = (props) => {
   const { repos, name } = props;
   const checkRepoLength = () => {
      if (repos.length > 0) {
         return mapThroughRepos;
      } else {
         return <div>No repository</div>;
      }
   };

   const mapThroughRepos = repos.map((repo) => (
      <div className='project' key={repo.id}>
         <div className='project-info'>
            <h3>{repo.name}</h3>
         </div>
         <div className='view'>
            <Link to={`/contributor/${name}/${repo.name}`} className='button'>
               View Repository
            </Link>
         </div>
      </div>
   ));

   return <>{checkRepoLength()}</>;
};

export default RepositoriesList;

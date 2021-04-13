import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const ContributorsList = (props) => {
   const { contributors } = props;
   const contributorInfo = (contributor) => (
      <div className='col-md-5 col-lg-3' key={contributor.id}>
         <div className='box'>
            <div className='image'>
               <img
                  src={contributor.avatar_url}
                  alt={`${contributor.name}'s image'`}
               />
            </div>
            <p className='name'>{contributor.name}</p>
            <div className='social'>
               <span className='red'>
                  <i className='fas fa-user-plus'></i>&nbsp;
                  {contributor.followers}
               </span>
               <span className='blue'>
                  <i className='fas fa-file-code'></i>&nbsp;
                  {contributor.public_repos}
               </span>
               <span className='green'>
                  <i className='fas fa-comment-dots'></i>&nbsp;
                  {contributor.public_gists}
               </span>
            </div>
            <Link to={`/contributor/${contributor.login}`} className='button'>
               View Profile
            </Link>
         </div>
      </div>
   );
   const mapContributors = () => {
      if (contributors.length > 0) {
         return contributors.map((contributor) => {
            return contributorInfo(contributor);
         });
      } else {
         return <div>No results</div>;
      }
   };
   return <>{mapContributors()}</>;
};

ContributorsList.propTypes = {
   contributors: PropTypes.array.isRequired,
};
export default ContributorsList;

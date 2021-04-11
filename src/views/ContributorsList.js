import React from 'react';
import { Link } from 'react-router-dom';

const ContributorsList = (props) => {
   console.log(props);
   const { contributors } = props;
   const contributorInfo = (contributor) => (
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
               <i className='far fa-heart'></i>&nbsp;{contributor.followers}
            </span>
            <span className='blue'>
               <i className='fab fa-telegram-plane'></i>&nbsp;
               {contributor.public_repos}
            </span>
            <span className='green'>
               <i className='fas fa-user'></i>&nbsp;{contributor.public_gists}
            </span>
         </div>
         <Link to={`/contributor/${contributor.login}`} className='button'>
            View Profile
         </Link>
      </div>
   );
   const mapContributors = contributors.map((contributor) => {
      return contributorInfo(contributor);
   });
   return <>{mapContributors}</>;
};

export default ContributorsList;

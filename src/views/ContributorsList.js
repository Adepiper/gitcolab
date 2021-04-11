import React from 'react';
import { Link } from 'react-router-dom';

const ContributorsList = (props) => {
   console.log(props);
   const { contributors } = props;
   const contributorInfo = (contributor) => (
      <div class='box'>
         <div class='image'>
            <img src={contributor.avatar_url} alt='' />
         </div>
         <p class='name'>{contributor.name}</p>
         {/* <p class='name'>Username: {contributor.login}</p> */}
         <div class='social'>
            <span class='red'>
               <i class='far fa-heart'></i>&nbsp;{contributor.followers}
            </span>
            <span class='blue'>
               <i class='fab fa-telegram-plane'></i>&nbsp;
               {contributor.public_repos}
            </span>
            <span class='green'>
               <i class='fas fa-user'></i>&nbsp;{contributor.public_gists}
            </span>
         </div>
         <Link to={`/contributor/${contributor.login}`} class='button'>
            View Profile
         </Link>
      </div>
   );
   const mapContributors = contributors.map((contributor) => {
      console.log(contributor);
      return contributorInfo(contributor);
   });
   return <>{mapContributors}</>;
};

export default ContributorsList;

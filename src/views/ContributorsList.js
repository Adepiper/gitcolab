import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const ContributorsList = (props) => {
   const { contributors, loading } = props;
   console.log(contributors);
   console.log(props);
   const contributorInfo = (contributor) => (
      <div className='box' key={contributor.id}>
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
const mapStateToProps = (state) => ({
   contributors: state.contributors.contributors,
   loading: state.contributors.loading,
});
export default ContributorsList;

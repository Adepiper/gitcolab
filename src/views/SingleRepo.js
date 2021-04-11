import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRepoDetails } from '../redux/actions/getRepoDetails';
import { loadingAction } from '../redux/actions/loading';

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
      loadingAction();
      getRepoDetails(contributor.repos, repo);
   }, []);

   return <>SingleRepo</>;
};

const mapStateToProps = (state) => ({
   contributor: state.contributors.contributor,
   loading: state.contributors.loading,
   repoDetails: state.contributors.repoDetails,
});

export default connect(mapStateToProps, { getRepoDetails, loadingAction })(
   SingleRepo
);

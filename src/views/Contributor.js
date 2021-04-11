import React from 'react';
import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getContributor } from '../redux/actions/getContributor';

const Contributor = (props) => {
   const { getContributor } = props;
   const allRepos = useSelector((state) => state.contributors.contributors);
   useEffect(() => {
      if (allRepos.length > 1) {
         getContributor(allRepos, 'abrons');
      }
   }, []);
   return <div>contributor</div>;
};

export default connect(null, { getContributor })(Contributor);

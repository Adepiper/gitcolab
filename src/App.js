import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getContributors } from './redux/actions';
import { getContributor } from './redux/actions/getContributor';
import { useEffect } from 'react';
import { getContributorRepo } from './redux/actions/getContributorRepo';
import { getRepoDetails } from './redux/actions/getRepoDetails';

function App(props) {
   const getContributorEl = () => {
      props.getRepoDetails('https://api.github.com/users/Adepiper/repos');
   };

   return (
      <div className='App'>
         Hello
         <button onClick={props.getContributors}>get Contributors</button>
         {/* <button onClick={getContributorEl}>get Contributors</button> */}
      </div>
   );
}

export default connect(null, {
   getContributors,
   getContributor,
   getContributorRepo,
   getRepoDetails,
})(App);

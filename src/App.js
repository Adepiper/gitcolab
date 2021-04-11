import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getContributors } from './redux/actions';
import { getContributor } from './redux/actions/getContributor';
import { useEffect } from 'react';
import { getContributorRepo } from './redux/actions/getContributorRepo';
import { getRepoDetails } from './redux/actions/getRepoDetails';
import { Route, Router, Switch } from 'react-router-dom';
import Contributors from './views/Contributors';
import SingleRepo from './views/SingleRepo';

function App(props) {
   const getContributorEl = () => {
      props.getRepoDetails('https://api.github.com/users/Adepiper/repos');
   };

   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Contributors} />
            <Route exact path='/contributor' component={Contributor} />
            <Route exact path='/repository' component={SingleRepo} />
         </Switch>
      </Router>
   );
}

export default connect(null, {
   getContributors,
   getContributor,
   getContributorRepo,
   getRepoDetails,
})(App);

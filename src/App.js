import './App.css';
import {
   Route,
   BrowserRouter as Router,
   Switch,
   Redirect,
} from 'react-router-dom';
import Contributors from './views/Contributors';
import SingleRepo from './views/SingleRepo';
import Contributor from './views/Contributor';
import Header from './views/utilities/Header';

function App() {
   return (
      <Router>
         <Header />
         <Switch>
            <Route exact path='/' component={Contributors} />
            <Route exact path='/contributor/:name' component={Contributor} />
            <Route
               exact
               path='/contributor/:name/:repo'
               component={SingleRepo}
            />
            <Route render={() => <Redirect to='/' />} />
         </Switch>
      </Router>
   );
}

export default App;

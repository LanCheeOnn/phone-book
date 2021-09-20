import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddContacts from './AddContacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path to="/">
              <Home/>
            </Route>
            <Route path="/addcontacts">
              <AddContacts/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

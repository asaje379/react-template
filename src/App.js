
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import Login from './views/Login';
import Admin from './views/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/admin" component={Admin}>
          {/* <Redirect to="/admin/dashboard"/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

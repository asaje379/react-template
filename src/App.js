
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import Login from './vendor/views/login/Login';
import Dashboard from './vendor/views/admin/Dashboard';
import Test from './vendor/views/test/Test';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/admin" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

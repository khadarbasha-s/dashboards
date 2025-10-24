import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Home from './views/home';
import AdminDashboard from './views/admin-dashboard';
import NewAdminDashboard from './views/root/NewAdminDashboard.js';
import StudentDashboard from './views/user/StudentDashboard.js';

import NotFound from './views/not-found';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin-dashboard" component={AdminDashboard} />
        <Route exact path="/root-admin-dashboard" component={NewAdminDashboard} />
        <Route exact path="/student-dashboard" component={StudentDashboard} />

        <Route path="/404" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

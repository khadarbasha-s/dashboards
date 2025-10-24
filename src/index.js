import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './style.css';

// Import components
import Login from './components/Login';
import AdminDashboard from './views/admin-dashboard';
import RootAdminDashboard from './views/root/NewAdminDashboard';
import StudentDashboard from './views/user/StudentDashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
  <Route exact path="/login" component={Login} />
  
  {/* Protected Routes */}
  <PrivateRoute 
    path="/admin-dashboard" 
    component={AdminDashboard} 
    allowedRole="admin" 
  />
  <PrivateRoute 
    path="/root-admin-dashboard" 
    component={RootAdminDashboard} 
    allowedRole="root-admin" 
  />
  <PrivateRoute 
    path="/student-dashboard" 
    component={StudentDashboard} 
    allowedRole="student" 
  />
  
  {/* Redirect root to login */}
  <Route exact path="/">
    <Redirect to="/login" />
  </Route>
  
  {/* Catch all other routes */}
  <Route path="*">
    <Redirect to="/login" />
  </Route>
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

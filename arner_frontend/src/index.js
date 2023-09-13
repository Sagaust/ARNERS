import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './styles/main.css';  // Importing the main CSS file
import Button from '@mui/material/Button';
import App from './App';
import CoursesList from './CoursesList';
import CourseDetail from './CourseDetail';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import NotFound from './NotFound';  // A simple 404 Not Found component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/courses" exact component={CoursesList} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

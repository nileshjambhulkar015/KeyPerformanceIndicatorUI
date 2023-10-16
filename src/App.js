import logo from './logo.svg';
import './App.css';
import DepartmentComponent from './components/DepartmentComponent/DepartmentComponent';

import EmployeeComponent from './components/EmployeeComponent/EmployeeComponent';
import DesignationComponent from './components/DesignationComponent/DesignationComponent';
import {
  BrowserRouter as Router,
   Route,
  Link,
  Switch,
} from "react-router-dom";

import React, { Component } from 'react';
import KeyParameterComponent from './components/KeyParameterComponent/KeyParameterComponent';
import LocationComponent from './components/LocationComponent/LocationComponent';
import RegionComponent from './components/RegionComponent/RegionComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">FutureBizops</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><Link to="/department">Department</Link></li>
                <li><Link to="/designation">Designation</Link></li>
                <li><Link to="/employeedata">Employee</Link></li>
                <li><Link to="/keyparemeter">Key Indicator</Link></li>

                <li><Link to="/location">Location</Link></li>
                <li><Link to="/region">Region</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/department" component={DepartmentComponent} />
            <Route path="/designation" component={DesignationComponent} />
            <Route path="/employeedata" component={EmployeeComponent} />
            <Route path="/keyparemeter" component={KeyParameterComponent} />
            <Route path="/location" component={LocationComponent} />
            <Route path="/region" component={RegionComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Counter } from './features/counter/Counter';
// import axios from 'axios'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li> 
            <Link to="/">Home</Link> 
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/addUsers">AddUsers</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/addUsers">
          <AddUser />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return(
    <h1>Home</h1>
  )
}

function Users() {
  return(
    <h1>Users</h1>
  )
}

function AddUser() {
  return(
    <h1>Add user</h1>
  )
}

export default App;

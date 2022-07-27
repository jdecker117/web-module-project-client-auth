import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Login from './components/Login'
import AddFriend from './components/AddFriend'
import FriendsList from './components/FriendsList'
import Logout from './components/Logout'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <h2>Friends Database</h2>
        <Link className="links" to="/login">Login</Link>
        <Link className="links" to="/friends">FriendsList</Link>
        <Link className="links" to="/friends/add">Add Friends</Link>
        <Link className="links" to="/logout">Logout</Link>
        </header>
        
        <Switch>
          <PrivateRoute path="/friends/add" component={AddFriend}/>
          <PrivateRoute path="/friends" component={FriendsList}/>
          <PrivateRoute path="/logout" component={Logout}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

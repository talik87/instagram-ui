import React from 'react';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import Login from './Login/Login';
import Register from './Register/Register';
import CreatePost from './CreatePost/CreatePost';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/post/create">
             <CreatePost/>
           </Route>
            <Route path="/">
              <Feed />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

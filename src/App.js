import React from 'react';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/Profile">
              <Profile />
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

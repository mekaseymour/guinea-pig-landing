import React from 'react';
import logo from './guinea.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">Guinea Pig</p>
        <p>
          No animals were harmed in the making of this app ❤︎
        </p>
        <Link
          className="App-link"
          to="/privacy"
        >
          privacy policy
        </Link>
      </header>
    </div>
  );
}

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/privacy/" exact component={PrivacyPolicy} />
      </Router>
  )
}

export default App;

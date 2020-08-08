import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './components/Landing';
import Header from './components/about/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

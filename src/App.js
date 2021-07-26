import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Node from './pages/Node/Node';
import ReactJs from './pages/ReactJs/ReactJs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/node">
          <Node />
        </Route>
        <Route path="/react">
          <ReactJs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import BmiCalculator from "./components/BmiCalculator";
import BmiDetail from './components/BmiDetail';

function App() {
  let history = useHistory();
  return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <BmiCalculator/>
          </Route>
          <Route path="/detail">
            <BmiDetail/>
          </Route>
        </Switch>
      </Router>
  );
}
export default App;

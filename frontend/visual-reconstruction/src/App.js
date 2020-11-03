import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/demos">Demos</Link>
          </p>
          <p>
            <Link to="/wiki">Wiki</Link>
          </p>
        </nav>

        <Switch>
          <Route path="/demos">
            <Demos />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

function Home() {
  return (
    <div>
      <h2>
        Main Demo!
      </h2>
      <p>
        Demo code here!
      </p>
    </div>
  );
}


function Demos() {
  return (
    <div>
      <h2>
        Other Demos!
      </h2>
      <p>
        Demos code here!
      </p>
    </div>
  );
}

function Wiki() {
  return (
    <div>
      <h2>
        Wiki!
      </h2>
      <ul>
        <li>
          Human Vision
        </li>
        <li>
          Computer Vision
        </li>
        <li>
          Human-Computer Vision
        </li>
      </ul>
    </div>
  );
}

export default App;

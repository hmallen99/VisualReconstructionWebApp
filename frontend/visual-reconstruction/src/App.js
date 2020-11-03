import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Demos from './Pages/Demos';
import Home from './Pages/Home';
import Wiki from './Pages/Wiki';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <div className="App-header-box">
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
          <div className="App-header-box">
            <p>
              <Link to="/demos">Demos</Link>
            </p>
          </div>
          <div className="App-header-box">
            <p>
              <Link to="/wiki">Wiki</Link>
            </p>
          </div>
          <div className="App-header-box">
            <p>
              <Link to="/about">About</Link>
            </p>
          </div>
        </nav>

        <Switch>
          <Route path="/demos">
            <Demos />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

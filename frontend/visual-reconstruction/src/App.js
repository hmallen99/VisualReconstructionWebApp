import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DemoPage from './Pages/DemoPage'
import Home from './Pages/Home';
import Wiki from './Pages/Wiki';
import About from './Pages/About';
import TopbarLink from './Pages/UtilPages/TopbarLink';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
            >
              <TopbarLink to="/" text="Home" />
              <TopbarLink to="/demos" text="Demos" />
              <TopbarLink to="/wiki" text="Wiki" />
              <TopbarLink to="/about" text="About" />
            </Tabs>
          </AppBar>
        </nav>

        <Switch>
          <Route path="/demos">
            <DemoPage />
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

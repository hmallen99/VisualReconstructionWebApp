import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import SidebarLink from './UtilPages/SidebarLink';
import DemoMap from './UtilPages/DemoMap';
import { Drawer, Tabs } from '@material-ui/core';

function DemoPage() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ 
      display: "flex" 
    }}>
        <div style={{outline: "5px black"}}>
          <Tabs 
            orientation="vertical"
            variant="scrollable"
            style={{backgroundColor: "lightgray"}}
          >
            <SidebarLink to={`${url}/mnist_cnn`} text="MNIST CNN" />
            <SidebarLink to={`${url}/spatial_smoothing`} text="SPATIAL SMOOTHING" />
          </Tabs>
        </div>
        
        
        

        <Switch>
          <Route exact path={path} />
          <Route path={`${path}/:demoID`} />
        </Switch>
      

      <div style={{ flex: 1, padding: "10px" }}>
        <Switch>
          <Route exact path={path}>
            <Container fixed>
              <h2>Demos</h2>
            </Container>
            
          </Route>
          <Route path={`${path}/:demoID`}>
            <Demo />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Demo() {
  let {demoID} = useParams();
  const DemoComponent = DemoMap[demoID];

  return(
    <div className="Demo">
      <Container fixed>
        <DemoComponent />
      </Container>
    </div>
  );
}

export default DemoPage;
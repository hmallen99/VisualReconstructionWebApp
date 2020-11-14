import React from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import MnistCNN from './Demos/MnistCNN';
import SpatialSmoothing from './Demos/SpatialSmoothing';
import DemoMap from './UtilPages/DemoMap';

function DemoPage() {
  let { path, url } = useRouteMatch();

  return (
    <div style={{ display: "flex" }}>
      <div
          style={{
            padding: "5px",
            width: "15%",
            background: "#f0f0f0"
          }}
      >
        <ul>
          <li>
            <Link to={`${url}/mnist_cnn`}>MNIST CNN</Link>
          </li>
          <li>
            <Link to={`${url}/spatial_smoothing`}>Spatial Smoothing</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path} />
          <Route path={`${path}/:demoID`} />
        </Switch>
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        <Switch>
          <Route exact path={path}>
            <h2>Demos</h2>
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
    <div>
      <DemoComponent />
    </div>
  );
}

export default DemoPage;
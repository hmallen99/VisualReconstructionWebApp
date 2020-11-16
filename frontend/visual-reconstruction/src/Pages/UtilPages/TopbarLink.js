import React from 'react';
import {Link} from 'react-router-dom';
import Tab from '@material-ui/core/Tab';


function TopbarLink(props) {
  return (
    <Link to={props.to} style={{
      textDecoration: 'none',
      color: 'white',
    }}>
      <Tab label={props.text} />
    </Link>
  )
}

export default TopbarLink;
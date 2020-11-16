import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Tab } from '@material-ui/core';

function SidebarLink(props) {
  return (
    <Link to={props.to} style={{
      textDecoration: 'none',
      color: 'black',
    }}>
      <Tab label={props.text} />
        
    </Link>
  )
}

export default SidebarLink;
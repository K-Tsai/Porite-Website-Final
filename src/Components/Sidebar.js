import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className="sidemenu">
      <List disablePadding dense>
        <ListItem button>
          <ListItemText>Auto Parts</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Oilless Bearing Parts</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Metal Injection Molding</ListItemText>
        </ListItem>
      </List>
    </div>
  )
}

export default Sidebar
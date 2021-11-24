import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Box from '@mui/material/Box';
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useHistory } from "react-router-dom";


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer( props )  {
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () =>  {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

    const menuItems = [
      { 
        text: 'Notes', 
        icon: <LightbulbOutlinedIcon/>, 
        path: '/dashboard' 
      },
      { 
        text: 'Remainders', 
        icon: < NotificationsNoneOutlinedIcon />, 
        path: '/create' 
      },
      { 
        text: 'Edit labels', 
        icon: <CreateOutlinedIcon />, 
        path: '/create' 
      },
      { 
        text: 'Archieve', 
        icon: < ArchiveOutlinedIcon/>, 
        path: '/login' 
      },
      { 
        text: 'Bin', 
        icon: <DeleteOutlinedIcon />, 
        path: "/trash"
      },
    ];
  

    const ListItemsColour = styled(ListItem)`
    &:hover {
      background-color: #e6e8e6;
    }
    &:click {
      background-color: #e6e8e6;
    }
    &:focus {
      background-color: #f5cb90;
    }
    border-radius: 0 25px 25px 0;
    `;

  return (
    <Box sx={
      {display: 'flex'}
  } >
    <Drawer
      variant="permanent"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
       <DrawerHeader />
        <List >
          {menuItems.map((item) => (
            <ListItemsColour 
           
              button 
             
              key={item.text} 
              
              onClick={() =>{ props.handleClick(item.text);
                history.push(item.path)}
                }
              
              
          >
              <ListItemIcon onClick={() =>{ props.handleClick(item.text);}} >{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemsColour>
          ))}
        </List>
        
        
      </Drawer>
   </Box>
    )
}

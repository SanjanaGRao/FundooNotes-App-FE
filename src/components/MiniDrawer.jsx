import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const drawerWidth = 200;
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

export default function MiniDrawer( {handleTitle} )  {
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () =>  {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

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
    `;

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
       <DrawerHeader />
      <List style={{ color: "#202124" }}>
      <ListItemsColour button onClick={() => handleTitle("FundooNotes")}>
          <ListItemIcon>
            <LightbulbOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes"/>
        </ListItemsColour>
        <ListItemsColour button onClick={() => handleTitle("Reminders")}>
          <ListItemIcon>
            <NotificationsNoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reminders" />
        </ListItemsColour>
        <ListItemsColour button onClick={() => handleTitle("Edit labels")}>
          <ListItemIcon>
            <EditOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Edit labels" />
        </ListItemsColour>
        <ListItemsColour button onClick={() => handleTitle("Archive")}>
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemsColour>
        <ListItemsColour button onClick={() => handleTitle("Bin")}>
          <ListItemIcon>
            <DeleteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItemsColour>
      </List>
    </Drawer>
  );
}

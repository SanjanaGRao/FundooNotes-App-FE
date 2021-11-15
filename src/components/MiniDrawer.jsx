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
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

export default function MiniDrawer()  {
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () =>  {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseOver={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <List style={{ marginTop: "65px", color: "#202124" }}>
        {["Notes", "Reminders", "Edit Labels", "Archive", "Bin"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ color: "#5f6368" }}>
                {index === 0 ? (
                  <LightbulbOutlinedIcon />
                ) : index === 1 ? (
                  <NotificationsNoneOutlinedIcon />
                ) : index === 2 ? (
                  <EditOutlinedIcon />
                ) : index === 3 ? (
                  <ArchiveOutlinedIcon />
                ) : (
                  <DeleteOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
}

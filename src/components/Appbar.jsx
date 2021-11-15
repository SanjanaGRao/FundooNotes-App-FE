import * as React from "react";
import "../css/appBar.css";
import Logo from "../assets/keep_2020q4_48dp.png";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { TextField, InputAdornment } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import Badge from "@mui/material/Badge";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";

const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Appbar( props ) {
  return (
      <AppBar position="fixed" style={{ background: "#ffffff" }}>
        <Toolbar style={{ color: "rgba(0, 0, 0, 0.54)" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={()=>props.handleDrawer()}
            color="inherit"
            sx={{
              marginRight: "5px",
            }}
          >
            <MenuIcon sx={{ color: "#5f6368" }} />
          </IconButton>
          <Avatar alt="FundooNotes" src={Logo} variant="square" />
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "5px" }}
          >
            <span className="mainLogoAppBar">FundooNotes</span>
          </Typography>
          <TextField
          className="searchBar"
          placeholder="Search"
          variant="outlined"
          size="small"
          style={{ width: "50%", marginLeft: "70px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon  sx={{ color: "#5f6368" }}  />
              </InputAdornment>
            ),
            style: { color: "black" },
          }}
        />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge>
                <RefreshIcon sx={{ color: "#5f6368" }} />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge>
                <ViewStreamSharpIcon sx={{ color: "#5f6368" }} />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge>
                <SettingsSharpIcon sx={{ color: "#5f6368" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              sx={{
                marginLeft: "25px",
              }}
            >
              <AccountCircle sx={{ fontSize: 40, color: "#5f6368" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

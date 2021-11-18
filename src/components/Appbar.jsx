import React from "react";
import { useState, useEffect } from "react";
import "../css/dashboard/appBar.css";
import Logo from "../assets/keep_2020q4_48dp.png";
import { styled,alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import RefreshIcon from "@mui/icons-material/Refresh";
import Badge from "@mui/material/Badge";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchedNotes } from "../reduxActions/actionsOnNotes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "grey",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100px",
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

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

export default function Appbar( {handleDrawer, title} ) {
  const [search, setSearch] = useState("");
  const myNotes = useSelector((state) => state.allNotes.notes);
  const dispatch = useDispatch();

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  useEffect(() => {
    console.log(myNotes);
    dispatch(
      setSearchedNotes(
        myNotes.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      )
    );
  }, [search, myNotes]);
  
  return (
      <AppBar position="fixed" style={{ background: "#ffffff" }}>
        <Toolbar style={{ color: "rgba(0, 0, 0, 0.54)" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawer}
            color="inherit"
            sx={{
              marginRight: "15px",
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
            <span className="mainLogoAppBar">{title}</span>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              onChange={(event) => handleSearch(event.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit">
              <Badge>
                <RefreshIcon sx={{ color: "#5f6368" }} />
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge>
                <SplitscreenOutlinedIcon sx={{ color: "#5f6368" }} />
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

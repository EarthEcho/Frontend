import * as React from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MainListItems } from "./DashList";
import MuiDrawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: "#254330",
    borderRadius: "0 0 18px 0",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(13),
      },
    }),
  },
}));

const DashDrawer = (props) => {
  const drawerWidth = props.drawerWidth;
  const toggleDrawer = () => {
    props.setOpen(!props.open);
  };
  return (
    <Drawer variant="permanent" open={props.open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [5],
          py: 3,
        }}
      >
        {" "}
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="white"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Healthy Earth
        </Typography>
      </Toolbar>
      <Divider />
      <List component="nav" sx={{ color: "white" }}>
        <MainListItems />
      </List>
    </Drawer>
  );
};

export default DashDrawer;

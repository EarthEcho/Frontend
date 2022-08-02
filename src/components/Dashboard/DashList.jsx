import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import LogoutIcon from "@mui/icons-material/Logout";
import FlagIcon from "@mui/icons-material/Flag";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { useNavigate } from "react-router-dom";

export const MainListItems = () => {
  const navigate = useNavigate();
  return (<React.Fragment>
    <ListItemButton
      sx={{ py: 2, px: 6 }}
      onClick={() => {
        navigate("/dashboard");
      }}
    >
      <ListItemIcon>
        <LightbulbIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Learn" />
    </ListItemButton>
    <ListItemButton
      sx={{ py: 2, px: 6 }}
      onClick={() => {
        navigate("/dashboard/track");
      }}
    >
      <ListItemIcon>
        <TrackChangesIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Track" />
    </ListItemButton>
    <ListItemButton
      sx={{ py: 2, px: 6 }}
      onClick={() => {
        navigate("/dashboard/goals");
      }}
    >
      <ListItemIcon>
        <FlagIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Challanges" />
    </ListItemButton>
    <ListItemButton
      sx={{ py: 2, px: 6 }}
      onClick={() => {
        navigate("/dashboard/product");
      }}
    >
      <ListItemIcon>
        <ProductionQuantityLimitsIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton
      sx={{ py: 2, px: 6 }}
      onClick={() => {
        navigate("/");
      }}
    >
      <ListItemIcon>
        <LogoutIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>);
};

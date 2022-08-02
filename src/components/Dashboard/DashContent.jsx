import * as React from "react";
import Box from "@mui/material/Box";
import DashDrawer from "./DashDrawer";
import DashHead from "./DashHead";

function DashContent(props) {
  const drawerWidth = 350;
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <DashHead
        drawerWidth={drawerWidth}
        open={open}
        setOpen={setOpen}
        user={props.user}
      />
      <DashDrawer drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
      {props.children}
    </Box>
  );
}

export default DashContent;

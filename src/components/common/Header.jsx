import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider, List, ListItem, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "#254330",
        width: "100%",
        padding: "36px 136px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Typography variant="h6">EarthEcho</Typography>
      <Divider />
      <List sx={{ display: "flex", marginLeft: 11 }}>
        {["Home", "Climate", "Blog", "About", "Contact"].map((el) => {
          return (
            <ListItem key={el}>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "400" }}
              >
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  {el}
                </Link>
              </Typography>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box>
        <Button
          variant="outlined"
          sx={{ borderColor: "#53C351", color: "#53C351" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#53C351", marginLeft: "10px" }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Header;

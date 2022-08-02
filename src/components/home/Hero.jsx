import React from "react";
import { Grid, Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#254330",
        height: "720px",
        width: "100%",
        borderRadius: "0px 0px 0px 80px",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" height="100%">
        <Grid item xs={5}>
          <Typography
            variant="h3"
            sx={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "64px",
              lineHeight: "88px",
              color: "white",
            }}
          >
            Lets Make our Earth Green and Clean{" "}
            <span style={{ color: "#53C351" }}>☘</span>
          </Typography>
          <Typography
            variant="p"
            color="white"
            sx={{ marginTop: "24px", marginBottom: "40px" }}
          >
            Our planet provides us with many gifts, including sunlight, air,
            water, soil, minerals, plants, and wildlife. In order to preserve
            the environment and nature, we must always keep them clean. An
            environment that is polluted causes diseases, toxic viruses and
            germs. The health of our environment is crucial. In a clean and
            green ecosystem, we have access to fresh air and pollution is
            reduced.
          </Typography>
          <Stack mt={6} spacing={7} direction="row">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#53C351" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Join Us
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#53C351", borderColor: "#53C351" }}
            >
              Learn More
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={
              "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            }
            alt={"flower"}
            width={"400px"}
            height={"400px"}
            style={{ "border-radius": "50%" }}
          />
          <img
            src={
              "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            }
            alt={"flower"}
            width={"200px"}
            height={"200px"}
            style={{
              "border-radius": "50%",
              position: "relative",
              top: "200px",
            }}
          />
          <img
            src={
              "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            }
            alt={"flower"}
            width={"250px"}
            height={"250px"}
            style={{
              "border-radius": "50%",
              position: "relative",
              bottom: "400px",
              left: "600px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;

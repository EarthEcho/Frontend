import { Grid, Typography } from "@mui/material";
import React from "react";

const MainCard = (props) => {
  return (
    <Grid container sx={{ marginBottom: props.mb }} rowSpacing={7}>
      <Grid item xs={8}>
        <Typography variant="h2" fontWeight="700" fontSize="64px">
          {props.headText}
        </Typography>
        <br />
        <Typography variant="p" color={"#808080"}>
          {props.bodyText}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h2"
          color={"#E6E6E6"}
          sx={{
            textAlign: "right",
            width: "100%",
            fontWeight: "700",
            fontSize: "160px",
          }}
        >
        {props.no}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img
          src={
            "https://images.unsplash.com/photo-1654488070804-66fe193c2840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=400"
          }
          alt="climate"
          height="400px"
          width={"100%"}
          style={{ borderRadius: "16px" }}
        />
      </Grid>
    </Grid>
  );
};

export default MainCard;

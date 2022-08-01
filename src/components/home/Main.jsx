import { Box } from "@mui/material";
import React from "react";
import MainCard from "../common/MainCard";

function Main() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "160px 104px",
      }}
    >
      <MainCard
        headText="Protect Our Earth Against Climate Change"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin consectetur netus dui, ultrices ornare lectus ac egestas. Vivamus tellus vestibulum aliquet arcu a duis. Aliquam vel, in molestie morbi eleifend feugiat nunc fringilla in. Amet, sit elementum ut enim neque, adipiscing euismod ac. Molestie eu "
        mb="160px"
        no="01"
      />
      <MainCard
        headText="Your Little Effort Can Make A Difference"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin consectetur netus dui, ultrices ornare lectus ac egestas. Vivamus tellus vestibulum aliquet arcu a duis. Aliquam vel, in molestie morbi eleifend feugiat nunc fringilla in. Amet, sit elementum ut enim neque, adipiscing euismod ac. Molestie eu "
        mb="160px"
        no="02"
      />
      <MainCard
        headText="Protect Our Resources Against Climate Change"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin consectetur netus dui, ultrices ornare lectus ac egestas. Vivamus tellus vestibulum aliquet arcu a duis. Aliquam vel, in molestie morbi eleifend feugiat nunc fringilla in. Amet, sit elementum ut enim neque, adipiscing euismod ac. Molestie eu "
        no="03"
      />
    </Box>
  );
}

export default Main;

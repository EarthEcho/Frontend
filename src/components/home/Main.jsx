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
        bodyText="To prevent irreversible harm to Earth’s life-support systems, humanity must emit less climate-warming greenhouse gases, including carbon dioxide, while also removing excess carbon from the atmosphere. This will require an urgent and large-scale transition to clean and renewable sources of energy."
        mb="160px"
        no="01"
      />
      <MainCard
        headText="Your Little Effort Can Make A Difference"
        bodyText="Small collective and individual's actions can make a big difference in climate change"
        mb="160px"
        no="02"
      />
      <MainCard
        headText="Protect Our Resources Against Climate Change"
        bodyText="There is a need to drastically cut emissions and remove a significant amount of carbon from the atmosphere. Natural carbon storage and absorption are provided by plants. By protecting natural habitats and carefully managing farmland and forests, we can store billions of tons of this “living carbon."
        no="03"
      />
    </Box>
  );
}

export default Main;

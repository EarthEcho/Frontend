import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import SchoolIcon from "@mui/icons-material/School";

const Mission = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "100px 104px",
        background:
          "linear-gradient(180deg, #E2EEEC -5.54%, rgba(227, 239, 237, 0) 100%)",
      }}
    >
      <Typography variant="h2" fontSize={64} fontWeight={700}>
        Our Mission to <br /> Save the Planet
      </Typography>
      <br />
      <br />
      <Grid container rowSpacing={1} columnSpacing={10}>
        <Grid item xs={4}>
          <SchoolIcon />
          <Typography variant="h5" fontSize={24} fontWeight={700}>
            Educate
          </Typography>
          <br />
          <Typography variant="p" fontSize={16} fontWeight={400}>
            Make the appearance of a mobile application that has quality and
            increases user convenience
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{height: "312px"}}>
          <SchoolIcon />
          <Typography variant="h5" fontSize={24} fontWeight={700}>
            Track
          </Typography>
          <br />
          <Typography variant="p" fontSize={16} fontWeight={400}>
            Make the appearance of a mobile application that has quality and
            increases user convenience
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SchoolIcon />
          <Typography variant="h5" fontSize={24} fontWeight={700}>
            Challange
          </Typography>
          <br />
          <Typography variant="p" fontSize={16} fontWeight={400}>
            Make the appearance of a mobile application that has quality and
            increases user convenience
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;

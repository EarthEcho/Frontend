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
            Train users on best practices to adopt for a healthy ecosystem that
            works for all.
          </Typography>
        </Grid>
        <Grid item xs={4} sx={{ height: "312px" }}>
          <SchoolIcon />
          <Typography variant="h5" fontSize={24} fontWeight={700}>
            Track
          </Typography>
          <br />
          <Typography variant="p" fontSize={16} fontWeight={400}>
            Monitoring and Tracking of user’s daily activities through a
            collection of data from the user in the form of a questionnaire
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SchoolIcon />
          <Typography variant="h5" fontSize={24} fontWeight={700}>
            Challange
          </Typography>
          <br />
          <Typography variant="p" fontSize={16} fontWeight={400}>
            From the collected data, We pose the right steps individual users
            are to take for minimal contribution to climate change
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;

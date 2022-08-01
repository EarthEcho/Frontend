import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";


const TrackFrame = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
    
      }}
    >
      <Container maxWidth="100%" sx={{ mt: 11, mb: 4 }} height={"100vh"}>

            <iframe title={"Track"}
            width={"100%"}
            height={"700px"}
            st
              src={"http://healthy-earth-viz-page.herokuapp.com/"}
            ></iframe>
      </Container>
    </Box>
  );
};

export default TrackFrame;

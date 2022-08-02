import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Swal from 'sweetalert2'
const ChallangeCard = () => {
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
        overflow: "auto",
      }}
    >
      <Container maxWidth="100%" sx={{ mt: 8, mb: 4 }}>
        <Grid container spacing={2} width="100%">
          {[...Array(20)].map((e,i) => {
            return (
              <Grid
                item
                spacing={2}
                xs={3}
                sx={{
                  mt: 7,
                  backgroungColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                }}
              >
                <Card maxWidth="100%">
                  <CardMedia
                    sx={{ height: 0, paddingTop: "56.25%" }}
                    image={
                      "https://www.ldeo.columbia.edu/sites/default/files/Climate-challenge-1.jpeg"
                    }
                    title={"challange"}
                  />

                  <CardContent>
                    <div
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {"Challange"+ i}
                      </Typography>
                    </div>

                    <Typography
                      dangerouslySetInnerHTML={{ __html: "Clean Energy Kit" }}
                      variant="body2"
                      color="textSecondary"
                    />
                  </CardContent>
                  <CardActions
                    disableSpacing
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button variant="contained" color="success" onClick={() => {Swal.fire("This challange is not available yet")}}>See challange</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallangeCard;

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
                      "https://cdn11.bigcommerce.com/s-ufhcuzfxw9/images/stencil/1280x1280/products/13245/13354/KT-NEWENER__96072.1573683399.jpg?c=2"
                    }
                    title={"tomato"}
                  />

                  <CardContent>
                    <div
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="h5" gutterBottom>
                        {"Challange"+i}
                      </Typography>

                      <Typography variant="h5">{"#2554"}</Typography>
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
                    <Button variant="contained" color="success">Select</Button>
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

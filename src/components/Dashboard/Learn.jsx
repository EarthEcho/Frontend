import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LearnTabs from "./LearnTabs";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,

} from "@mui/material";
import ReactPlayer from "react-player";

const Learn = () => {
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
        <Grid item spacing={2} xs={8} sx={{ mt: 7}}>

            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                minHeight: 700,
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="680px"
              />
            </Paper>
        </Grid>
        <Grid item xs={4} sx={{ mt: 7 }}>
          <Box height={720} sx={{overflow: "scroll"}}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LearnTabs />
            {[...Array(8)].map((el) => {
              return (
                <Card sx={{ width: "100%", mt: 2 }}>
                  <CardActionArea
                    sx={{ display: "flex", width: "100%", height: "100%" }}
                  >
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                      width="100%"
                      height="100%"
                      light={true}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all
                        continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
  )
}

export default Learn
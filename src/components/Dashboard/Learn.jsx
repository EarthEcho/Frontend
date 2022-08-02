import * as React from "react";
import { useState, useEffect, useContext } from "react";
import AuthContext from "./../../Authentication/AuthProvider";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography, Card, CardActionArea, CardContent } from "@mui/material";
import ReactPlayer from "react-player";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Learn = () => {
  const [climateData, setClimateData] = useState([]);
  const [value, setValue] = useState(0);
  const [current, setCurrent] = useState([
    0,
    "https://www.youtube.com/watch?v=aH495epWeAE",
    "",
  ]);
  const [facts, setFacts] = useState([]);
  const { auth } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://earthclimate.herokuapp.com/api/climate/",
        {
          headers: {
            Authorization: `Token ${auth.token}`,
          },
        }
      );
      const factsResponse = await axios.get(
        "https://earthclimate.herokuapp.com/api/climate/fact",
        {
          headers: {
            Authorization: `Token ${auth.token}`,
          },
        }
      );

      setFacts(factsResponse?.data);
      setClimateData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };

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
          <Grid item xs={8} sx={{ mt: 7 }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                minHeight: 700,
              }}
            >
              {current[0] === 0 ? (
                <ReactPlayer url={current[1]} width="100%" height="680px" />
              ) : current[0] === 1 ? (
                <Typography
                  sx={{
                    background:
                      "url('https://cdn-res.keymedia.com/cms/images/ca/155/0382_637563297731887770.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: 700,
                    textAlign: "center",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {current[1]}
                </Typography>
              ) : (
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "30px",
                    backgroundColor: "#254330",
                    color: "white",
                    fontWeight: 600,
                    width: "100%",
                  }}
                >
                  {`Topic: ${current[0]}`}
                  <br />
                  <br />
                  <br />
                  {current[1]}
                </Typography>
              )}
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ mt: 7 }}>
            <Box height={720} sx={{ overflow: "scroll" }}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Videos" {...a11yProps(0)} />
                    <Tab label="Facts" {...a11yProps(1)} />
                    <Tab label="Articles" {...a11yProps(2)} />
                  </Tabs>

                  <TabPanel value={value} index={0}>
                    {climateData.map((el) => {
                      return el.video_url.length !== 0 ? (
                        <Card sx={{ width: "100%", mt: 2 }} key={el.id}>
                          <CardActionArea
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <ReactPlayer
                              url={el.video_url}
                              width="100%"
                              height="300px"
                              light={true}
                              onClickPreview={() => {
                                setCurrent([0, el.video_url]);
                              }}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {el.topic}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      ) : null;
                    })}
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {facts.map((el) => {
                      return (
                        <Card
                          sx={{ width: "100%", mt: 2 }}
                          key={el.id}
                          onClick={() => {
                            setCurrent([1, el.facts]);
                          }}
                        >
                          <CardActionArea
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <CardContent>
                              <Typography variant="h6" component="div">
                                {el.facts}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      );
                    })}
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    {climateData.map((el) => {
                      return el.articles.length !== 0 ? (
                        <Card
                          sx={{ width: "100%", mt: 2 }}
                          key={el.id}
                          onClick={() => {
                            setCurrent([el.topic, el.articles]);
                          }}
                        >
                          <CardActionArea
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                            }}
                          >
                            <CardContent>
                              <Typography
                                variant="h6"
                                component="div"
                                textAlign={"left"}
                              >
                                Topic: {el.topic}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      ) : null;
                    })}
                  </TabPanel>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Learn;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import axios from "axios";
import AuthContext from "../../Authentication/AuthProvider";
import Swal from 'sweetalert2'

function LoginSide() {
  const navigate = useNavigate();
  const { setAuth } = React.useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post(
        "https://earthclimate.herokuapp.com/api/login/",
        JSON.stringify({
          username: data.get("username"),
          password: data.get("password"),
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const token = response?.data?.token;
      const user = response?.data?.username;
      const pwd = response?.data?.password;
      console.log(response?.data);
      setAuth({ user, pwd, token });
      Swal.fire({
        title: 'Success',
        text: 'Login Successfully',
        icon: 'success',
        timer: 2500
      })
      navigate("/dashboard");

    } catch (err){
      if (!err?.response) {
        Swal.fire({
          title: 'Error!',
          text: 'Network Error',
          icon: 'error',
          timer: 2500
        })
    } else if (err.response?.status === 409) {
      Swal.fire({
        title: 'Error!',
        text: 'Wrong email or password',
        icon: 'error',
        timer: 2500
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Login Failed',
        icon: 'error',
        timer: 2500
      })
    }}
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          padding: 4,
          paddingBottom: 8,
          marginTop: 8,
          backgroundColor: "#fff",
          borderRadius: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#53C351" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#53C351" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginSide;
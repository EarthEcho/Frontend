import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Authentication/AuthProvider";
import Swal from 'sweetalert2';

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { setAuth } = React.useContext(AuthContext);
      try {
        const response = axios.post(
          "http://earthclimate.herokuapp.com/api/user/",
          JSON.stringify({
            username: data.get("email"),
            email: data.get("email"),
            first_name: data.get("firstName"),
            last_name: data.get("lastName"),
            password: data.get("password"),
            confirm_password: data.get("password"),
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        const token = response?.data?.token;
        const user = response?.data?.username;
        const pwd = response?.data?.password;
        setAuth({ user, pwd, token });
        Swal.fire({
          title: 'Success',
          text: 'Login Successfully',
          icon: 'success',
          timer: 2500
        })
  
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
          text: 'Username Taken',
          icon: 'error',
          timer: 2500
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Registeration Failed',
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to terms and condition"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#53C351" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
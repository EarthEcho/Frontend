import React from "react";
import LoginSide from "../components/login/LoginSide";
import Header from "./../components/common/Header";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#254330",
        minHeight: "100vh"
      }}
    >
      <Header />
      <LoginSide />
    </div>
  );
};

export default Login;

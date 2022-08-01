import React from "react";
import Header from "../components/common/Header";
import RegisterForm from "../components/register/RegisterForm";

const Register = () => {
  return (
    <div style={{ backgroundColor: "#254330" , minHeight: "100vh"}}>
      <Header />
      <RegisterForm />
    </div>
  );
};

export default Register;

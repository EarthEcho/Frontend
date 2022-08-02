import * as React from "react";
import { useContext } from "react";
import DashContent from "../../components/Dashboard/DashContent";
import Learn from "../../components/Dashboard/Learn";
import AuthContext from "./../../Authentication/AuthProvider";
import { Navigate } from "react-router";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  console.log(auth.user);
  return auth.token ? (
    <DashContent>
      <Learn />
    </DashContent>
  ) : (
    <Navigate to="/login" />
  );
}

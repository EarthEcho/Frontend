import * as React from "react";
import { useContext } from "react";
import AuthContext from "./../../Authentication/AuthProvider";
import DashContent from "../../components/Dashboard/DashContent";
import Learn from "../../components/Dashboard/Learn";
import { Navigate } from "react-router";

export default function Dashboard() {
  const { auth } = useContext(AuthContext);
 
  return auth.token ? (
    <DashContent>
      <Learn />
    </DashContent>
  ) : (
    <Navigate to="/login" />
  );
}

import React from "react";
import DashContent from "../../components/Dashboard/DashContent";
import ChallangeCard from "../../components/Dashboard/ChallangeCard";
import { useContext } from "react";
import AuthContext from "./../../Authentication/AuthProvider";
import { Navigate } from "react-router";

const Goal = () => {
  const { auth } = useContext(AuthContext);
  return auth.token ? (
    <DashContent>
      <ChallangeCard />
    </DashContent>
  ) : (
    <Navigate to="/login" />
  );
};

export default Goal;

import React from "react";
import DashContent from "../../components/Dashboard/DashContent";
import TrackFrame from "../../components/Dashboard/TrackFrame";
import { useContext } from "react";
import AuthContext from "./../../Authentication/AuthProvider";
import { Navigate } from "react-router";

const Track = () => {
  const { auth } = useContext(AuthContext);
  return auth.token ? (
    <DashContent>
      <TrackFrame />
    </DashContent>
  ) : (
    <Navigate to="/login" />
  );
};

export default Track;

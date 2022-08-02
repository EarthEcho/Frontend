import React from "react";
import DashContent from "../../components/Dashboard/DashContent";
import ProductCard from "../../components/Dashboard/ProductCard";
import { useContext } from "react";
import AuthContext from "./../../Authentication/AuthProvider";
import { Navigate } from "react-router";

const Product = () => {
  const { auth } = useContext(AuthContext);
  return auth.token ? (
    <DashContent>
      <ProductCard />
    </DashContent>
  ) : (
    <Navigate to="/login" />
  );
};

export default Product;

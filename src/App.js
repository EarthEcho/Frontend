import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Track from "./pages/Dashboard/Track";
import Goal from "./pages/Dashboard/Goal";
import Product from "./pages/Dashboard/Product";


function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/track" element={<Track />} />
          <Route path="/dashboard/goals" element={<Goal />} />
          <Route path="/dashboard/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

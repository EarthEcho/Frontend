import React from "react";
import Header from "./../components/common/Header";
import Main from "./../components/home/Main";
import Footer from "./../components/common/Footer";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Mission />
      <Footer />
    </div>
  );
}

export default Home;

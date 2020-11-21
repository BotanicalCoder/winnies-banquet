import React from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Aboutcomp from "./components/aboutcomp";
import Menucomp from "./components/menucomp";
import Banner from "./components/banner";
import Contactform from "./components/contactform";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Aboutcomp />
      <Menucomp />
      <Contactform />
      <Footer />
    </React.Fragment>
  );
}

export default App;

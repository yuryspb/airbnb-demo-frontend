import React from "react";

import Header from "../Header/";
import Explore from "./Explore/";
import Experiences from "./Experiences/";
import Homes from "./Homes/";
import Popular from "./Popular/";
import Destinations from "./Destinations/";
import Footer from "../Footer/";

export default () => {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="main">
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Destinations />
        </main>
      </div>
      <Footer />
    </div>
  );
};

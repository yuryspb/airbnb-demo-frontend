import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Photo from "./MainPhoto";
import Nav from "./Nav";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Host from "./Host";
import Neighborhood from "./Neighborhood";
import RoomsMap from "./RoomsMap";
import Similar from "./Similar";
import Explore from "./Explore";
import RequestCard from "./Request";
import MediaQuery from "react-responsive";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 0px;
`;

export default function() {
  return (
    <div>
      <Header value="Search" />

      <Main>
        <Photo />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-8">
              <Nav />
              <Overview />
              <Reviews />
              <Host />
              <Neighborhood />
            </div>
            <MediaQuery minWidth="991px">
              <div className="col-lg-4">
                <RequestCard />
              </div>
            </MediaQuery>
          </div>
          <RoomsMap />
          <Similar />
          <Explore />
        </div>
      </Main>
      <Footer />
    </div>
  );
}

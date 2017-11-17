import React from "react";

import Header from "../Header";
import Card from "./Card";
import Paginator from "./Paginator";
import Maps from "./Maps";

import { Filters, Filter, Wrapper, WrapperMap, Footer, BtnMap } from "./styled";
import Dates from "./Filters/Dates";

import btn from "./btnMap.png";
import img1 from "./home1.png";
import img2 from "./home2.png";
import img3 from "./home3.png";
import img4 from "./home4.png";
import img5 from "./home5.png";
import img6 from "./home6.png";

export default function() {
  return (
    <div>
      <Header value="Anywhere · Homes" />

      <Filters>
        <div className="container">
          <Dates />
        </div>
      </Filters>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <main>
              <Wrapper>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="La Salentina, see, nature & relax"
                    img={img1}
                    alt="La Salentina, see, nature & relax"
                    price={82}
                    type="Entire house"
                    beds="9 beds"
                    reviews={97}
                  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="Your private 3 bedr. riad and exclusi..."
                    img={img2}
                    alt="Your private 3 bedr. riad and exclusi..."
                    price={82}
                    type="Entire house"
                    beds="5 beds"
                    reviews={161}
                  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="Dreamy Tropical Tree House"
                    img={img3}
                    alt="Dreamy Tropical Tree House"
                    price={200}
                    type="Entire treehouse"
                    beds="1 bed"
                    reviews={364}
                    paddingBottom={24}
                  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="Best location old town luxury loft"
                    img={img4}
                    alt="Best location old town luxury loft"
                    price={110}
                    type="Entire apartment"
                    beds="1 bed"
                    reviews={369}
                  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="Lussuoso. Vista incantevole."
                    img={img5}
                    alt="Lussuoso. Vista incantevole."
                    price={83}
                    type="Entire apartment"
                    beds="6 bed"
                    reviews={105}
                  />
                </div>
                <div className="col-xs-12 col-md-6 col-lg-6">
                  <Card
                    title="In the historical center of Lecce"
                    img={img6}
                    alt="In the historical center of Lecce"
                    price={72}
                    type="Entire house"
                    beds="1 bed"
                    reviews={221}
                  />
                </div>
              </Wrapper>
            </main>
            <Paginator />
            <Footer>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
            </Footer>
          </div>
          <div className="col-lg-4">
            <WrapperMap>
              <Maps center={{ lat: 39.92, lng: 18.35 }} zoom={9} />
            </WrapperMap>
          </div>
          <BtnMap href="#">
            <img src={btn} alt="Map" />
          </BtnMap>
        </div>
      </div>
    </div>
  );
}

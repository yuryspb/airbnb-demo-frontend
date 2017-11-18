import React from "react";
import { Explore, Title, Wrapper, Img, Links, Feauters } from "./styled";
import pic1 from "./pic01.png";
import pic2 from "./pic02.png";
import pic3 from "./pic03.png";

export default function() {
  return (
    <div className="row">
      <Explore>
        <div className="col-12">
          <Title>Explore Airbnb</Title>
        </div>
        <div className="col-12">
          <Wrapper>
            <div className="col-xs-6 col-sm-5 col-md-4">
              <Links to="Homes/">
                <Img src={pic1} />
                <Feauters>Homes</Feauters>
              </Links>
            </div>
            <div className="col-xs-6 col-sm-5 col-md-4">
              <Links to="">
                <Img src={pic2} />
                <Feauters>Experiences</Feauters>
              </Links>
            </div>
            <div className="col-xs-6 col-sm-5 col-md-4">
              <Links to="">
                <Img src={pic3} />
                <Feauters>Restaurants</Feauters>
              </Links>
            </div>
          </Wrapper>
        </div>
      </Explore>
    </div>
  );
}

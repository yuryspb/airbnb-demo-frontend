import React from "react";
import {
  Destinations,
  Wrapper,
  Title,
  Link,
  Img,
  Name,
  BtnNext
} from "./styled";
import btn from "./btn.svg";
import pic1 from "./pic41.png";
import pic2 from "./pic42.png";
import pic3 from "./pic43.png";
import pic4 from "./pic44.png";
import pic5 from "./pic45.png";
import pic6 from "./pic46.png";

export default function() {
  return (
    <Destinations>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <Title>Featured destinations</Title>
          </Wrapper>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic1} />
                <Name>Paris</Name>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic2} />
                <Name>Miami</Name>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic3} />
                <Name>Tokyo</Name>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic4} />
                <Name>Cape town</Name>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic5} />
                <Name>Seoul</Name>
              </Link>
            </div>
            <div className="col-xs-4 col-sm-3 col-md-2">
              <Link href="#">
                <Img src={pic6} />
                <Name>Los Angeles</Name>
              </Link>
            </div>
          </Wrapper>
        </div>
      </div>
      <BtnNext href="#">
        <img src={btn} alt="arrow" />
      </BtnNext>
    </Destinations>
  );
}

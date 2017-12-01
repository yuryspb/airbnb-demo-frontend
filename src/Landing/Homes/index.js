import React from "react";
import {
  Homes,
  Wrapper,
  Title,
  LinkSeeAll,
  Link,
  Img,
  Name,
  Info,
  Price,
  Stars,
  BtnNext
} from "./styled";
import stars from "./stars.svg";
import btn from "./btn.svg";
import pic1 from "./pic21.png";
import pic2 from "./pic22.png";
import pic3 from "./pic23.png";

export default function() {
  return (
    <Homes>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <Title>Homes</Title>
            <LinkSeeAll href="#">See all&nbsp;&nbsp;&nbsp;</LinkSeeAll>
          </Wrapper>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Link href="homes/1">
                <Img src={pic1} />
                <Info>
                  <Price>$82 La Salentina, see, nature & relax</Price>
                  <Name>Entire house &#183; 9 beds</Name>
                </Info>
                <Stars src={stars} />
                97 &#183; Superhost
              </Link>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Link href="homes/2">
                <Img src={pic2} />
                <Info>
                  <Price>$82 Your private 3 bedr. riad and exclusi...</Price>
                  <Name>Entire house &#183; 5 beds</Name>
                </Info>
                <Stars src={stars} />
                161 &#183; Superhost
              </Link>
            </div>
            <div className="col-xs-8 col-sm-5 col-md-4">
              <Link href="homes/3">
                <Img src={pic3} />
                <Info>
                  <Price>$200 Dreamy Tropical Tree House</Price>
                  <Name>Entire house &#183; 1 bed</Name>
                </Info>
                <Stars src={stars} />
                364 &#183; Superhost
              </Link>
            </div>
          </Wrapper>
        </div>
      </div>
      <BtnNext href="#">
        <img src={btn} alt="arrow" />
      </BtnNext>
    </Homes>
  );
}

import React from 'react';
import {
  Experiences,
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
} from './styled';
import stars from './stars.svg';
import btn from './btn.svg';
import pic1 from './pic11.png';
import pic2 from './pic12.png';
import pic3 from './pic13.png';
import pic4 from './pic14.png';

export default function() {
  return (
    <Experiences>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <Title>Experiences</Title>
            <LinkSeeAll href="#">See all&nbsp;&nbsp;&nbsp;</LinkSeeAll>
          </Wrapper>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic1} />
                <Info>
                  <Price>$29</Price>
                  <Name>Forest therapy</Name>
                </Info>
                <Stars src={stars} />
                44 reviews
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic2} />
                <Info>
                  <Price>$69</Price>
                  <Name>Whale watching</Name>
                </Info>
                <Stars src={stars} />
                46 reviews
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic3} />
                <Info>
                  <Price>$69</Price>
                  <Name>Table Mountain Summit, Cable Car Down</Name>
                </Info>
                <Stars src={stars} />
                44 reviews
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic4} />
                <Info>
                  <Price>$50</Price>
                  <Name>Salsa night</Name>
                </Info>
                <Stars src={stars} />
                44 reviews
              </Link>
            </div>
          </Wrapper>
        </div>
      </div>
      <BtnNext href="#">
        <img src={btn} alt="arrow" />
      </BtnNext>
    </Experiences>
  );
}

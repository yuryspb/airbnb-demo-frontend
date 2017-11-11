import React from 'react';
import {
  Popular,
  Wrapper,
  Title,
  LinkSeeAll,
  Link,
  Img,
  Info,
  PlaceType,
  Name,
  Price,
  BtnNext
} from './styled';
import btn from './btn.svg';
import pic1 from './pic31.png';
import pic2 from './pic32.png';
import pic3 from './pic33.png';
import pic4 from './pic34.png';

export default function() {
  return (
    <Popular>
      <div className="row">
        <div className="col-12">
          <Wrapper>
            <Title>Popular reservations around the world</Title>
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
                  <PlaceType>speakeasy</PlaceType>
                  <Name>Chumley's</Name>
                  <Price>About $60 per person</Price>
                </Info>
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic2} />
                <Info>
                  <PlaceType>korean gastropub</PlaceType>
                  <Name>Hanjan</Name>
                  <Price>About $50 per person</Price>
                </Info>
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic3} />
                <Info>
                  <PlaceType>german american</PlaceType>
                  <Name>Prime Meats</Name>
                  <Price>About $55 per person</Price>
                </Info>
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-3">
              <Link href="#">
                <Img src={pic4} />
                <Info>
                  <PlaceType>fine seafood</PlaceType>
                  <Name>Seaprice</Name>
                  <Price>About $70 per person</Price>
                </Info>
              </Link>
            </div>
          </Wrapper>
        </div>
      </div>
      <BtnNext href="#">
        <img src={btn} alt="arrow" />
      </BtnNext>
    </Popular>
  );
}

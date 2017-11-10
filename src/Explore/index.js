import React from 'react';
import { Explore, Title, Wrapper, Link, Img, Feauters } from './styled';
import pic1 from './pic01.png';
import pic2 from './pic02.png';
import pic3 from './pic03.png';

export default function() {
  return (
    <div className="row">
      <Explore>
        <div className="col-12">
          <Title>Explore Airbnb</Title>
        </div>
        <div className="col-12">
          <Wrapper>
            <Link href="#">
              <Img src={pic1} />
              <Feauters>Homes</Feauters>
            </Link>
            <Link href="#">
              <Img src={pic2} />
              <Feauters>Experiences</Feauters>
            </Link>
            <Link href="#">
              <Img src={pic3} />
              <Feauters>Restaurants</Feauters>
            </Link>
          </Wrapper>
        </div>
      </Explore>
    </div>
  );
}

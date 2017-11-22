import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";

const Price = styled.div`
  @media (min-width: 991px) {
    width: 326px;
  }
`;

const Title = styled.span``;

const Name = styled.p``;

const Annotation = styled.p``;

const Bargraph = styled.div`
  }
`;

export default function() {
  return (
    <Price>
      <Title>Price range</Title>
      <Name>$10 — $1000+</Name>
      <Annotation>The average nightly price is $75.</Annotation>
      <Bargraph>
        <Rheostat min={10} max={1000} values={[1, 1000]} />
      </Bargraph>
    </Price>
  );
}

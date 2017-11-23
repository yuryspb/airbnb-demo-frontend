import React from "react";
import styled from "styled-components";
import Diagram from "./Diagram";
import Rheostat from "rheostat";

const Price = styled.div`
  @media (min-width: 991px) {
    width: 326px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 7px;
  flex-grow: 1;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
`;

const Annotation = styled.p`
  margin: 0;
  margin-bottom: 32px;

  font-family: "Circular Air Light", sans-serif;
  font-size: 12px;
`;

const Bargraph = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export default function() {
  return (
    <Price>
      <Name>$10 — $1000+</Name>
      <Annotation>The average nightly price is $75.</Annotation>
      <Bargraph>
        <Diagram />
        <Rheostat min={10} max={1000} values={[1, 1000]} />
      </Bargraph>
    </Price>
  );
}

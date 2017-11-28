import React from "react";
import styled from "styled-components";
import Diagram from "./Diagram";
import Rheostat from "rheostat";

const Price = styled.div`
  @media (min-width: 991px) {
    width: 326px;
  }
`;

const Title = styled.p`
  margin-bottom: 24px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
  }

  @media (min-width: 991px) {
    display: none;
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

export default function(props) {
  return (
    <Price>
      <Title>Price range</Title>
      <Name>
        ${props.price.startPrice} — ${props.price.endPrice}+
      </Name>
      <Annotation>The average nightly price is $75.</Annotation>
      <Bargraph>
        <Diagram />
        <Rheostat
          min={props.price.min}
          max={props.price.max}
          values={[props.price.startPrice, props.price.endPrice]}
          onValuesUpdated={props.onUpdatePrice}
        />
      </Bargraph>
    </Price>
  );
}

import React from "react";
import styled from "styled-components";

import stars from "../UI/stars.svg";
import { Img, CardTitle, Description, Reviews, Review } from "../UI";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export default function(props) {
  return (
    <Card>
      <Img src={props.img} alt={props.alt} width="100%" />
      <CardTitle>
        ${props.price} {props.title}
      </CardTitle>
      <Description>
        {props.type} · {props.beds}
      </Description>
      <Reviews>
        <Stars src={stars} />
        <Review>{props.reviews} · Superhost</Review>
      </Reviews>
    </Card>
  );
}

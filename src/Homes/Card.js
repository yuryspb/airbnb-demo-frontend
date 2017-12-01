import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import stars from "../UI/stars.svg";
import { Img, CardTitle, Description, Reviews, Review } from "../UI";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  color: #383838;
`;

export const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export default function(props) {
  return (
    <Card to={props.href}>
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

import React from "react";
import styled from "styled-components";

import arrow from "./paginArrow.svg";

const Pagination = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const Page = styled.button`
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 100%;
  border: none;
  margin-right: 12px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;

  ${props =>
    props.active ? "background-color:#008489" : "background-color:white"};
  ${props => (props.active ? "color:white" : "color:#0F7276")};
`;

const Next = Page.extend`
  vertical-align: middle;
  margin-left: 6px;
  margin-right:0;
  background-image: url("${arrow}");
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #008489;`;

const Pages = styled.span`vertical-align: middle;`;

const Info = styled.div`
  padding-top: 16px;
  font-size: 16px;
  line-height: 19px;
`;

export default props => {
  return (
    <Pagination>
      <Pages>
        <Page active>1</Page>
        <Page>2</Page>
        <Page>3</Page>
        <Page>...</Page>
        <Page>17</Page>
      </Pages>
      <Next />
      <Info>1 – 18 of 300+ Rentals</Info>
    </Pagination>
  );
};

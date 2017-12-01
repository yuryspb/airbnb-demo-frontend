import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: "Circular Air Book", sans-serif;
  text-decoration: none;
  font-size: 12px;
  color: #0f7276;

  &:active {
    font-family: "Circular Air Book", sans-serif;
    color: #383838;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Dot = styled.span`
  display: inline-block;
  margin: 0 8px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;
  color: #0f7276;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  padding: 12px 0;
`;

export default () => {
  return (
    <Nav>
      <Link href="#overview">Overview</Link>
      <Dot>·</Dot>
      <Link href="#reviews">Reviews</Link>
      <Dot>·</Dot>
      <Link href="#host">The Host</Link>
      <Dot>·</Dot>
      <Link href="#location">Location</Link>
    </Nav>
  );
};

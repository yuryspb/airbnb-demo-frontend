import styled from "styled-components";
import arrow from "./arrow.svg";

export const Popular = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 11px;

  @media (min-width: 576px) {
    padding-top: 20px;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const LinkSeeAll = styled.a`
  align-self: center;
  width: 55px;
  margin-bottom: -15px;
  background: url(${arrow}) no-repeat 100% 50%;
  font: 14px "Circular Air Book", sans-serif;
  color: #383838;
  text-decoration: none;
`;

export const Link = styled.a`
  text-align: left;
  text-decoration: none;
  color: #383838;
  font-size: 12px;
  font-family: "Circular Air Book", sans-serif;
`;

export const Img = styled.img``;

export const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export const Info = styled.p`
  font-size: 15px;
  margin-top: 7px;
  margin-bottom: 3px;
`;

export const PlaceType = styled.span`
  font: 8px "Circular", sans-serif;
  text-transform: uppercase;

  @media (min-width: 576px) {
    font-size: 10px;
  }
`;

export const Price = styled.span`
  font: 12px "Circular Air Light", sans-serif;
  margin-right: 5px;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export const Name = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font: 14px "Circular", sans-serif;
  font-weight: bold;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

export const BtnNext = styled.a`
  display: none;

  @media (min-width: 991px) {
    display: block;
    position: absolute;
    top: 160px;
    right: -35px;
    width: 40px;
    height: 40px;
  }
`;
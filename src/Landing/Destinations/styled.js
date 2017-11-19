import styled from "styled-components";

export const Destinations = styled.div`
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
  color: #383838;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #383838;
`;

export const Img = styled.img``;

export const Name = styled.p`
  font: 12px "Circular", sans-serif;
  margin-top: 5px;
  font-weight: bold;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

export const BtnNext = styled.a`
  display: none;

  @media (min-width: 991px) {
    display: block;
    position: absolute;
    top: 200px;
    right: -18px;
    width: 40px;
    height: 40px;
  }
`;

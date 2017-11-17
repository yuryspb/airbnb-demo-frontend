import styled from "styled-components";

export const Explore = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 105px;

  @media (min-width: 576px) {
    margin-top: 115px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  padding-left: 10px;
  text-align: left;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: left;
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 0 0 rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;

  @media (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    width: 310px;
    height: 72px;
  }
`;

export const Feauters = styled.span`
  padding-left: 12px;
  padding-top: 10px;
  color: #383838;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;

  @media (min-width: 576px) {
    padding-left: 24px;
    padding-top: 0px;
    font-size: 17px;
  }
`;

export const Img = styled.img`
  width: 142px;
  height: 78px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 0;

  @media (min-width: 576px) {
    width: 96px;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: 0;
  }
`;

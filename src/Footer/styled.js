import styled from "styled-components";
import arrow from "./arrowDown.svg";

export const Footer = styled.footer`
  margin-top: 28px;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
  width: 100%;

  @media (min-width: 576px) {
    margin-top: 50px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding-top: 16px;

  @media (min-width: 576px) {
    padding-top: 48px;
  }
`;

export const SelectorsField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (min-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  width: 144px;
  height: 40px;
  margin-bottom: 16px;
  margin-left: 18px;
  padding-left: 10px;
  border-radius: 4px;
  color: #383838;
  box-shadow: 1px rgba(72, 72, 72, 0.2);
  font-family: "Circular Air Light", sans-serif;
  font-size: 12px;
  background: url(${arrow}) no-repeat 95% 50%;
  appearance: none;
  ::-ms-expand {
    display: none;
  }

  @media (min-width: 576px) {
    height: 48px;
    width: 176px;
    font-size: 15px;
  }

  @media (min-width: 911px) {
    width: 229px;
    font-size: 18px;
  }
`;

export const NavContainer = styled.div`
  display: none;

  @media (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavTitle = styled.span`
  margin-bottom: 12px;
  font-family: "Circular Air Bold", sans-serif;
  font-size: 12px;
  font-weight: bold;

  @media (min-width: 911px) {
    font-size: 15px;
  }
`;

export const Link = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  color: #383838;
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;

  @media (min-width: 911px) {
    font-size: 15px;
  }
`;

export const LastRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`;

export const Copyright = styled.p`
  display: flex;
  align-items: center;
  font-family: "Circular Air Book", sans-serif;
  font-size: 15px;
`;

export const Logo = styled.img`margin-right: 12px;`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #636363;
  font-family: "Circular Air Book", sans-serif;
  font-size: 15px;
`;

export const DotInfo = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #484848;
`;

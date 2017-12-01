import styled from "styled-components";
import nextIcon from "./nextIcon.svg";
import { Link } from "react-router-dom";

export const container = styled.div`
  max-width: 1182px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
`;

export const ContainerFlex = styled.div`
  margin: auto;
  max-width: 976px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 141px;
  margin-left: -7px;
`;

export const WrapperMap = styled.section`
  display: none;

  @media (min-width: 991px) {
    display: block;
    position: fixed;
    top: 137px;
    bottom: 0;
    right: 0;
    left: calc(50% + 163px);
  }
`;

export const Footer = styled.section`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 27px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;
  color: #636363;
`;

export const BtnMap = styled.a`
  position: fixed;
  right: 8px;
  bottom: 24px;
  width: 40px;
  height: 40px;

  @media (min-width: 767px) {
    right: 4px;
  }

  @media (min-width: 991px) {
    display: none;
  }
`;

export const Filters = styled.div`
  position: fixed;
  margin-top: 81px;
  border-bottom: 0.5px solid rgba(72, 72, 72, 0.3);
  padding: 12px 6px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 11;
`;

export const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const SectionTitle = styled.h2`
  font-family: "Circular", sans-serif;
  line-height: 28px;
  font-size: 24px;
  color: #383838;
  margin: 0;
  margin-bottom: 16px;
  margin-top: 15px;

  @media (min-width: 768px) {
    line-height: 34px;
    font-size: 32px;
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin: 0 -8px;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  margin: 0 -8px;
  padding: 2px 0;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    margin: 0 -16px;
  }
`;

export const NextPage = styled.button`
  display: none;

  @media (min-width: 992px) {
    display: block;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    border: none;
    position: absolute;
    right: -25px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: url(${nextIcon}) no-repeat 0 0;
    background-size: contain;
    opacity: 0.8;
  }
`;

export const ScrollContainer = styled.div`
  position: relative;
`;

export const Card = styled(Link)`
  display: block;
  text-decoration: none;
  color: #383838;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

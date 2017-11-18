import styled from "styled-components";

export const container = styled.div`
  max-width: 1182px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 8px;
  padding-right: 8px;
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
`;

export const Filters = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  margin-top: 80px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  z-index: 9;
  min-height: 56px;
  margin-bottom: 1px;
`;

export const Filter = styled.div`
  padding: 7px 16px;
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #383838;

  @media (min-width: 320px) {
    display: ${props => (props.fShow ? "none" : "inline-block")};
  }
  @media (min-width: 991px) {
    display: inline-block;
  }
`;

export const Footer = styled.section`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 27px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;
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

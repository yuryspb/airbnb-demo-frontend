import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WrapperMap = styled.section`
  display: none;
  @media (min-width: 991px) {
    display: block;
    position: fixed;
    top: 138px;
    bottom: 0;
    right: 0;
    left: calc(50% + 160px);
  }
  @media (min-width: 1200px) {
    left: calc(50% + 158px);
  }
`;

export const Filters = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 9;
  margin-top: 81px;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  min-height: 56px;
  margin-bottom: 1px;
`;

export const Filter = styled.div`
  padding: 7px 16px;
  margin-right: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font: normal 14px;
  font-family: "Circular Air Book", sans-serif;
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
  margin-top: 30px;
  font: 16px "Circular Air Book", sans-serif;
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

import styled from "styled-components";

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
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 12px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 11;
`;

import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WrapperMap = styled.div`
  display: flex;
  width: 16.66%;
  height: 100%;
  position: fixed;
`;

export const Filters = styled.header`
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
  @media (min-width: 992px) {
    display: inline-block;
  }
`;

export const Footer = styled.section`
  text-align: center;
  margin-top: 30px;
  font: 16px "Circular Air Book", sans-serif;
`;

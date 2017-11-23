import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import down from "../../arrowDown.svg";

const Amenities = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    display: block;
  }
`;

const Title = styled.p`
  margin: 0;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const Content = styled.div`
  display: none;

  @media (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    font-family: "Circular Air Light", sans-serif;
    font-size: 18px;
    padding-bottom: 16px;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
`;

const ExpandBtn = styled.button`
  padding: 0;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  background-color: #fff;
  border: none;
  color: #0f7276;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Icon = styled.img`
  margin-left: 6px;
`;

export default function() {
  return (
    <Amenities>
      <Title>Amenities</Title>
      <Content>
        <CheckboxWrapper>
          <Checkbox /> Heating
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox /> Kitchen
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox /> TV
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox /> Wireless Internet
        </CheckboxWrapper>
      </Content>
      <ExpandBtn>
        See all <MediaQuery minWidth="576px">amenities</MediaQuery>
        <Icon src={down} />
      </ExpandBtn>
    </Amenities>
  );
}

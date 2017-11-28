import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Chkbox from "../../../../UI/Checkbox";
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

export const Checkbox = styled(Chkbox)`
  margin-right: 12px;
`;

const ExpandBtn = styled.button`
  padding: 0;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  background-color: #fff;
  border: none;
  color: #0f7276;
  cursor: pointer;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Icon = styled.img`
  margin-left: 6px;
`;

export default function(props) {
  return (
    <Amenities>
      <Title>Amenities</Title>
      <Content>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.heating}
            name="heating"
            onToggle={props.onToggleAmenities}
          />
          Heating
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.kitchen}
            name="kitchen"
            onToggle={props.onToggleAmenities}
          />
          Kitchen
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.tv}
            name="tv"
            onToggle={props.onToggleAmenities}
          />
          TV
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.amenities.wireless}
            name="wireless"
            onToggle={props.onToggleAmenities}
          />
          Wireless Internet
        </CheckboxWrapper>
      </Content>
      <ExpandBtn>
        See all <MediaQuery minWidth="576px">amenities</MediaQuery>
        <Icon src={down} />
      </ExpandBtn>
    </Amenities>
  );
}

import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Chkbox from "../../../../UI/Checkbox";
import down from "../../arrowDown.svg";

const Facilities = styled.div`
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
    <Facilities>
      <Title>Facilities</Title>
      <Content>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.elebator}
            name="elebator"
            onToggle={props.onToggleFacilities}
          />
          Elebator
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.freeParking}
            name="freeParking"
            onToggle={props.onToggleFacilities}
          />
          Free parking on premises
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.pool}
            name="pool"
            onToggle={props.onToggleFacilities}
          />
          Pool
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Checkbox
            isChecked={props.facilities.wheelchair}
            name="wheelchair"
            onToggle={props.onToggleFacilities}
          />
          Wheelchair accessible
        </CheckboxWrapper>
      </Content>
      <ExpandBtn>
        See all <MediaQuery minWidth="576px">facilities</MediaQuery>
        <Icon src={down} />
      </ExpandBtn>
    </Facilities>
  );
}

import React from "react";
import styled from "styled-components";
import minus from "../../minus.svg";
import plus from "../../plus.svg";

const RoomsAndBeds = styled.div`
  @media (min-width: 576px) {
    width: 60%;
  }
`;

const Title = styled.p`
  margin-bottom: 24px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 6px;
  flex-grow: 1;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;

  @media (min-width: 576px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 20px;
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Num = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
`;

const Icon = styled.img``;

export default function(props) {
  const plusCount = e => props.handlePlusCount(e.target.name);
  const minusCount = e => props.handleMinusCount(e.target.name);

  return (
    <RoomsAndBeds>
      <Title>Rooms and beds</Title>
      <Row>
        <Name>Bedrooms</Name>
        <Button
          isDisabled={props.rooms.bedrooms <= props.roomsMin}
          onClick={minusCount}
          name="bedrooms"
        >
          <Icon src={minus} />
        </Button>
        <Num>{props.rooms.bedrooms}+</Num>
        <Button
          isDisabled={props.rooms.bedrooms >= props.roomsMax}
          onClick={plusCount}
          name="bedrooms"
        >
          <Icon src={plus} />
        </Button>
      </Row>
      <Row>
        <Name>Beds</Name>
        <Button
          isDisabled={props.rooms.beds <= props.roomsMin}
          onClick={minusCount}
          name="beds"
        >
          <Icon src={minus} />
        </Button>
        <Num>{props.rooms.beds}+</Num>
        <Button
          isDisabled={props.rooms.beds >= props.roomsMax}
          onClick={plusCount}
          name="beds"
        >
          <Icon src={plus} />
        </Button>
      </Row>
      <Row>
        <Name>Bathrooms</Name>
        <Button
          isDisabled={props.rooms.bathrooms <= props.roomsMin}
          onClick={minusCount}
          name="bathrooms"
        >
          <Icon src={minus} />
        </Button>
        <Num>{props.rooms.bathrooms}+</Num>
        <Button
          isDisabled={props.rooms.bathrooms >= props.roomsMax}
          onClick={plusCount}
          name="bathrooms"
        >
          <Icon src={plus} />
        </Button>
      </Row>
    </RoomsAndBeds>
  );
}

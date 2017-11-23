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

export default function() {
  return (
    <RoomsAndBeds>
      <Title>Rooms and beds</Title>
      <Row>
        <Name>Bedrooms</Name>
        <Button isDisabled>
          <Icon src={minus} />
        </Button>
        <Num>0+</Num>
        <Button>
          <Icon src={plus} />
        </Button>
      </Row>
      <Row>
        <Name>Beds</Name>
        <Button isDisabled>
          <Icon src={minus} />
        </Button>
        <Num>0+</Num>
        <Button>
          <Icon src={plus} />
        </Button>
      </Row>
      <Row>
        <Name>Bathrooms</Name>
        <Button isDisabled>
          <Icon src={minus} />
        </Button>
        <Num>0+</Num>
        <Button>
          <Icon src={plus} />
        </Button>
      </Row>
    </RoomsAndBeds>
  );
}

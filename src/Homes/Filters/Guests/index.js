import React from "react";
import styled from "styled-components";
import minus from "../minus.svg";
import plus from "../plus.svg";

const Guests = styled.div`
  height: 100vh;

  @media (min-width: 576px) {
    width: 326px;
    height: auto;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Content = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

const Title = styled.p`
  margin: 0;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  padding-top: 8px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  opacity: ${props => (props.isDisabled ? 0.5 : 1)};
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
  cursor: pointer;
`;

const Num = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  font-size: 18px;
  text-align: center;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
`;

const Icon = styled.img``;

export default function(props) {
  const plusCount = e => props.handlePlusCount(e.target.name);
  const minusCount = e => props.handleMinusCount(e.target.name);

  return (
    <Guests>
      <Content>
        <Row>
          <TextWrapper>
            <Title>Adults</Title>
          </TextWrapper>
          <Button
            isDisabled={props.guests.adults <= props.guestsMin}
            onClick={minusCount}
            name="adults"
          >
            <Icon src={minus} />
          </Button>
          <Num>{props.guests.adults}</Num>
          <Button
            isDisabled={props.guests.adults >= props.guestsMax}
            onClick={plusCount}
            name="adults"
          >
            <Icon src={plus} />
          </Button>
        </Row>
        <Row>
          <TextWrapper>
            <Title>Children</Title>
            <Annotation>Ages 2 — 12</Annotation>
          </TextWrapper>
          <Button
            isDisabled={props.guests.children <= props.guestsMin}
            onClick={minusCount}
            name="children"
          >
            <Icon src={minus} />
          </Button>
          <Num>{props.guests.children}</Num>
          <Button
            isDisabled={props.guests.children >= props.guestsMax}
            onClick={plusCount}
            name="children"
          >
            <Icon src={plus} />
          </Button>
        </Row>
        <Row>
          <TextWrapper>
            <Title>Infants</Title>
            <Annotation>Under 2</Annotation>
          </TextWrapper>
          <Button
            isDisabled={props.guests.infants <= props.guestsMin}
            onClick={minusCount}
            name="infants"
          >
            <Icon src={minus} />
          </Button>
          <Num>{props.guests.infants}</Num>
          <Button
            isDisabled={props.guests.infants >= props.guestsMax}
            onClick={plusCount}
            name="infants"
          >
            <Icon src={plus} />
          </Button>
        </Row>
      </Content>
    </Guests>
  );
}

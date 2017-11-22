import React from "react";
import styled from "styled-components";
import minus from "../minus.svg";
import plus from "../plus.svg";

const Guests = styled.div`
  height: 100vh;

  @media (min-width: 576px) {
    width: 310px;
    height: auto;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Content = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const Annotation = styled.p`
  margin: 0;
  padding-top: 8px;
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
  border: 1px solid #008489;
  border-radius: 50%;
  background-color: #fff;
  color: #008489;
`;

const Num = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  font-size: 18px;
`;

const Icon = styled.img``;

export default function(props) {
  return (
    <Guests>
      <Content>
        <Row>
          <TextWrapper>
            <Title>Adults</Title>
          </TextWrapper>
          <Button isDisabled>
            <Icon src={minus} />
          </Button>
          <Num>{props.adults}</Num>
          <Button>
            <Icon src={plus} />
          </Button>
        </Row>
        <Row>
          <TextWrapper>
            <Title>Children</Title>
            <Annotation>Ages 2 — 12</Annotation>
          </TextWrapper>
          <Button isDisabled>
            <Icon src={minus} />
          </Button>
          <Num>{props.children}</Num>
          <Button>
            <Icon src={plus} />
          </Button>
        </Row>
        <Row>
          <TextWrapper>
            <Title>Infants</Title>
            <Annotation>Under 2</Annotation>
          </TextWrapper>
          <Button isDisabled>
            <Icon src={minus} />
          </Button>
          <Num>{props.infants}</Num>
          <Button>
            <Icon src={plus} />
          </Button>
        </Row>
      </Content>
    </Guests>
  );
}
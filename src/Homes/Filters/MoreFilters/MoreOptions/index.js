import React from "react";
import styled from "styled-components";
import RadioButton from "../../../../UI/RadioButton";

const MoreOptions = styled.div`
  @media (min-width: 576px) {
    width: 60%;
  }
`;

const Title = styled.p`
  margin-bottom: 4px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    font-size: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 991px) {
    display: ${props => (props.hideLg ? "none" : "flex")};
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

const Annotation = styled.p`
  margin: 0;
  padding-bottom: 6px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  padding: 4px 0;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;
  color: #0f7276;
  text-decoration: none;

  @media (min-width: 576px) {
    font-size: 16px;
  }
`;

const TextWrapper = styled.div``;

export default function(props) {
  return (
    <MoreOptions>
      <Title>More options</Title>
      <Row hideLg>
        <TextWrapper>
          <Name>Instant Book</Name>
          <Annotation>Secure a reservation instantly.</Annotation>
          <Link>Learn more</Link>
        </TextWrapper>
        <RadioButton
          isChecked={props.instantBook}
          onToggle={props.onToggleInstantBook}
        />
      </Row>
      <Row>
        <TextWrapper>
          <Name>Superhost</Name>
          <Annotation>Stay with recognized hosts.</Annotation>
          <Link>Learn more</Link>
        </TextWrapper>
        <RadioButton
          isChecked={props.superhost}
          onToggle={props.onToggleSuperhost}
        />
      </Row>
    </MoreOptions>
  );
}

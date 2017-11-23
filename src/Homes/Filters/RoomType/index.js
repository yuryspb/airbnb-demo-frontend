import React from "react";
import styled from "styled-components";
import entire from "./entireHome.svg";
import privat from "./privateRoom.svg";
import shared from "./sharedRoom.svg";

const RoomType = styled.div`
  @media (min-width: 991px) {
    width: 326px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const Name = styled.p`
  margin: 0;
  padding-top: 3px;
  padding-bottom: 6px;
  flex-grow: 1;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
`;

const Annotation = styled.p`
  margin: 0;
  padding-right: 30px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 12px;
`;

const Icon = styled.img`
  display: block;
  align-self: flex-end;
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

export default function() {
  return (
    <RoomType>
      <Row>
        <Checkbox />
        <TextWrapper>
          <Name>Entire home</Name>
          <Annotation>Have a place to yourself</Annotation>
        </TextWrapper>
        <Icon src={entire} />
      </Row>
      <Row>
        <Checkbox />
        <TextWrapper>
          <Name>Private room</Name>
          <Annotation>
            Have your own room and share some common spaces
          </Annotation>
        </TextWrapper>
        <Icon src={privat} />
      </Row>
      <Row>
        <Checkbox />
        <TextWrapper>
          <Name>Shared room</Name>
          <Annotation>Stay in a shared space, like a common room</Annotation>
        </TextWrapper>
        <Icon src={shared} />
      </Row>
    </RoomType>
  );
}

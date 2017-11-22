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
  padding: 8px 0;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.span``;

const Name = styled.p``;

const Annotation = styled.p``;

const Icon = styled.img``;

export default function() {
  return (
    <RoomType>
      <Title>Room type</Title>
      <Row>
        <TextWrapper>
          <Name>Entire home</Name>
          <Annotation>Have a place to yourself</Annotation>
        </TextWrapper>
        <Icon src={entire} />
      </Row>
      <Row>
        <TextWrapper>
          <Name>Private room</Name>
          <Annotation>
            Have your own room and share some common spaces
          </Annotation>
        </TextWrapper>
        <Icon src={privat} />
      </Row>
      <Row>
        <TextWrapper>
          <Name>Shared room</Name>
          <Annotation>Stay in a shared space, like a common room</Annotation>
        </TextWrapper>
        <Icon src={shared} />
      </Row>
    </RoomType>
  );
}

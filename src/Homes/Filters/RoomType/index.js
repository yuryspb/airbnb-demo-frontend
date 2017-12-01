import React from "react";
import styled from "styled-components";
import Chkbox from "../../../UI/Checkbox";
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

export const Checkbox = styled(Chkbox)`
  margin-right: 12px;
  flex-shrink: 0;
  align-self: flex-start;
`;

export default function(props) {
  return (
    <RoomType>
      <Row>
        <Checkbox
          isChecked={props.roomtype.entire}
          onToggle={props.onToggle}
          name="entire"
        />
        <TextWrapper onToggle={props.onToggle}>
          <Name>Entire home</Name>
          <Annotation>Have a place to yourself</Annotation>
        </TextWrapper>
        <Icon src={entire} />
      </Row>
      <Row>
        <Checkbox
          isChecked={props.roomtype.private}
          onToggle={props.onToggle}
          name="private"
        />
        <TextWrapper>
          <Name>Private room</Name>
          <Annotation>
            Have your own room and share some common spaces
          </Annotation>
        </TextWrapper>
        <Icon src={privat} />
      </Row>
      <Row>
        <Checkbox
          isChecked={props.roomtype.shared}
          onToggle={props.onToggle}
          name="shared"
        />
        <TextWrapper>
          <Name>Shared room</Name>
          <Annotation>Stay in a shared space, like a common room</Annotation>
        </TextWrapper>
        <Icon src={shared} />
      </Row>
    </RoomType>
  );
}

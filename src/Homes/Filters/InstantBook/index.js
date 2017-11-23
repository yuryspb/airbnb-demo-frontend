import React from "react";
import styled from "styled-components";
import RadioBtn from "../../../UI/RadioButton";

const InstantBook = styled.div`
  display: flex;
  justify-content: space-between;
  width: 292px;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled.p`
  margin: 0;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;
`;

const Annotation = styled.p`
  margin: 0;
  padding-top: 4px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;
`;

const RadioButton = styled(RadioBtn)`
  display: none;
  margin-left: 30px;
`;

export default function() {
  return (
    <InstantBook>
      <TextWrapper>
        <Title>InstantBook</Title>
        <Annotation>
          Listings you can book without waiting for host approval.
        </Annotation>
      </TextWrapper>
      <RadioButton />
    </InstantBook>
  );
}

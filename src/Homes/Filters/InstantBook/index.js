import React from "react";
import styled from "styled-components";

const InstantBook = styled.div`
  display: flex;
  justify-content: space-between;
  width: 326px;
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

const RadioButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 50%;
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

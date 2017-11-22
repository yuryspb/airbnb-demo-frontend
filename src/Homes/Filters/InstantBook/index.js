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
  font-size: 18px;
`;

const Annotation = styled.p`
  margin: 0;
  padding-top: 4px;
  font-size: 14px;
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
    </InstantBook>
  );
}

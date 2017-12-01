import React from "react";
import styled from "styled-components";
import arrow from "./arrowDown.svg";

const Section = styled.section`
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  max-width: 75%;
  font-family: "Circular", sans-serif;
  font-size: 24px;
  color: #383838;

  @media (min-width: 768px) {
    margin-bottom: 8px;
    max-width: 80%;
    font-size: 28px;
  }
`;

const Descr = styled.p`
  margin: 16px 0;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

const Details = styled.span`
  margin-bottom: 24px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;
  margin: 16px 0;
`;

const LinkMore = styled.button`
  display: block;
  padding: 0;
  background: none;
  border: none;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;
  color: #0f7276;
  margin-bottom: 16px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-left: 8px;
  cursor: pointer;
`;

export default () => {
  return (
    <Section id="host">
      <Title>The neighborhood</Title>
      <Details>
        Yudy & Victoria’s home is located in Armenia, Quindio, Colombia.
      </Details>
      <Descr>
        We are situated in the heart of the coffee region in the Andean
        mountains in Colombia. We are in "Vereda La Pradera" neighborhood, near
        the small town of "El Caimo", 20 minutes from Armenia and 20 minutes
        from the airport, by car. Close enough for comfort and easy access, far
        enough from the hustle of traffic and city noise that you can commune
        with nature. Sleep to the sound of the crickets and awaken to the sound
        of birds.
      </Descr>
      <LinkMore>
        Read more about neighborhood <Arrow src={arrow} alt="Arrow" />
      </LinkMore>
    </Section>
  );
};

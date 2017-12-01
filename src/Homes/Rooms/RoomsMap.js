import React from "react";
import ReactMap from "../Maps";
import styled from "styled-components";

const Section = styled.section`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const MapContainer = styled.div`
  display: block;
  width: 100%;
  height: 192px;

  @media (min-width: 768px) {
    height: 474px;
  }

  @media (min-width: 992px) {
    height: 612px;
  }
`;

const Note = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

const Marker = styled.div`
  position: relative;
  z-index: 500;
  width: 32px;
  height: 32px;
  background: rgba(3, 178, 185, 0.2);
  border: 0.8px solid #008489;
  border-radius: 50px;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    width: 77px;
    height: 77px;
  }
  @media (min-width: 992px) {
    width: 98px;
    height: 98px;
  }
`;

export default props => (
  <Section>
    <MapContainer>
      <ReactMap center={{ lat: 4.49, lng: -75.7 }} zoom={14}>
        <Marker lat={4.49} lng={-75.7} />
      </ReactMap>
    </MapContainer>
    <Note>
      Exact location information is provided after a booking is confirmed.
    </Note>
  </Section>
);

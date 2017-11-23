import React from "react";
import styled from "styled-components";
import RoomType from "../RoomType";
import Price from "../Price";
import RoomsAndBeds from "./RoomsAndBeds";
import MoreOptions from "./MoreOptions";
import Amenities from "./Amenities";
import Facilities from "./Facilities";

const MoreFilters = styled.div`
  background-color: #fff;
  z-index: 12;
`;

const Content = styled.div`
  padding-top: 8px;
`;

const Filter = styled.div`
  padding: 32px 8px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  background-color: #fff;

  @media (min-width: 991px) {
    display: ${props => (props.hideLg ? "none" : "block")};
  }
`;

export default function() {
  return (
    <MoreFilters>
      <Content>
        <Filter hideLg>
          <RoomType />
        </Filter>
        <Filter hideLg>
          <Price />
        </Filter>
        <Filter>
          <RoomsAndBeds />
        </Filter>
        <Filter>
          <MoreOptions />
        </Filter>
        <Filter>
          <Amenities />
        </Filter>
        <Filter>
          <Facilities />
        </Filter>
      </Content>
    </MoreFilters>
  );
}

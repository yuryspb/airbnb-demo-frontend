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

export default function(props) {
  return (
    <MoreFilters>
      <Content>
        <Filter hideLg>
          <RoomType
            onToggle={props.onToggleRoomTypes}
            roomtype={props.roomtype}
          />
        </Filter>
        <Filter hideLg>
          <Price onUpdatePrice={props.onUpdatePrice} price={props.price} />
        </Filter>
        <Filter>
          <RoomsAndBeds
            rooms={props.rooms}
            roomsMin={props.roomsMin}
            roomsMax={props.roomsMax}
            handlePlusCount={props.handlePlusCount}
            handleMinusCount={props.handleMinusCount}
          />
        </Filter>
        <Filter>
          <MoreOptions
            instantBook={props.instantBook}
            onToggleInstantBook={props.onToggleInstantBook}
            superhost={props.superhost}
            onToggleSuperhost={props.onToggleSuperhost}
          />
        </Filter>
        <Filter>
          <Amenities
            amenities={props.amenities}
            onToggleAmenities={props.onToggleAmenities}
          />
        </Filter>
        <Filter>
          <Facilities
            facilities={props.facilities}
            onToggleFacilities={props.onToggleFacilities}
          />
        </Filter>
      </Content>
    </MoreFilters>
  );
}

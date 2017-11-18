import React from "react";
import { ContainerFlex } from "../styled";
import Calendar from "./Calendar";
import Dropdown from "./Dropdown";
import { Filters } from "../styled";

export default function() {
  return (
    <Filters>
      <ContainerFlex>
        <Dropdown name="Dates" activeTitle="Check in - Check out">
          <Calendar />
        </Dropdown>
        <Dropdown name="Guests" />
        <Dropdown name="Room type" fShow />
        <Dropdown name="Price" fShow />
        <Dropdown name="Instant book" fShow />
        <Dropdown name="More filters" />
      </ContainerFlex>
    </Filters>
  );
}

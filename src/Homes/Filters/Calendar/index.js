import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import MediaQuery from "react-responsive";
import styled from "styled-components";
import "../datepicker.css";
import arrow from "../arrowRight.svg";

const Calendar = styled.div``;

const Input = styled.input`
  width: 25%;
  font-family: "Circular Air Book", sans-serif;
  font-size: 18px;
  border: none;
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  color: ${props => (props.isActive ? "#0F7276" : "#636363")};
`;

const MobileForm = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 10px;
`;

const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

export default function(props) {
  return (
    <Calendar>
      <MediaQuery minWidth="991px">
        <DayPickerRangeController
          startDate={props.startDate}
          endDate={props.endDate}
          hideKeyboardShortcutsPanel={true}
          numberOfMonths={2}
          isOutsideRange={day => day.isBefore(moment(), "day")}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          onFocusChange={props.onFocusChange}
        />
      </MediaQuery>
      <MediaQuery minWidth={576} maxWidth={991}>
        <DayPickerRangeController
          startDate={props.startDate}
          endDate={props.endDate}
          hideKeyboardShortcutsPanel={true}
          numberOfMonths={1}
          isOutsideRange={day => day.isBefore(moment(), "day")}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          onFocusChange={props.onFocusChange}
        />
      </MediaQuery>
      <MediaQuery maxWidth="575px">
        <MobileForm>
          <Input
            isActive
            value={
              props.startDate ? props.startDate.format("MMM Do") : "Check in"
            }
          />
          <Arrow src={arrow} />
          <Input
            value={props.endDate ? props.endDate.format("MMM Do") : "Check out"}
          />
        </MobileForm>
        <DayPickerRangeController
          startDate={props.startDate}
          endDate={props.endDate}
          hideKeyboardShortcutsPanel={true}
          numberOfMonths={2}
          orientation="vertical"
          verticalHeight={530}
          isOutsideRange={day => day.isBefore(moment(), "day")}
          focusedInput={props.focusedInput}
          onDatesChange={props.onDatesChange}
          onFocusChange={props.onFocusChange}
        />
      </MediaQuery>
    </Calendar>
  );
}

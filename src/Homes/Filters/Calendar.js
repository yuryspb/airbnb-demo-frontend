import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";

import MediaQuery from "react-responsive";
import styled from "styled-components";
import "./datepicker.css";

const Calendar = styled.div``;

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: null,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    return (
      <Calendar>
        <MediaQuery minWidth="991px">
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={2}
            isOutsideRange={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery minWidth={576} maxWidth={991}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={1}
            isOutsideRange={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery maxWidth="575px">
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={2}
            orientation="vertical"
            verticalHeight={568}
            isOutsideRange={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
      </Calendar>
    );
  }
}

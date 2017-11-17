import React from "react";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import styled from "styled-components";

import { DayPicker } from "react-dates";
import { Filter } from "../styled";

const CalendarWrapper = styled.div`
  position: absolute;
  top: 50px;
`;

const Button = styled(Filter)`
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};
`;

export default class Dates extends React.Component {
  state = {
    isOpen: false,
    isChecked: false
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  toggleOpen = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.isOpen ? (
          <Button onClick={this.toggleOpen} isOpen>
            Check in &mdash; Check out
          </Button>
        ) : (
          <Button onClick={this.toggleOpen}>Dates</Button>
        )}
        {this.state.isOpen && (
          <CalendarWrapper>
            <DayPicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => {
                this.setState({ startDate, endDate });
              }}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => {
                this.setState({ focusedInput });
              }}
            />
          </CalendarWrapper>
        )}
        <Filter>Guests</Filter>
        <Filter fShow>Room type</Filter>
        <Filter fShow>Price</Filter>
        <Filter fShow>Instant book</Filter>
        <Filter>More filters</Filter>
      </div>
    );
  }
}

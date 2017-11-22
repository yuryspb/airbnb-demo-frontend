import React from "react";
import { ContainerFlex, Filters } from "../styled";
import Calendar from "./Calendar";
import Dropdown from "./Dropdown";
import Guests from "./Guests";
import RoomType from "./RoomType";
import Price from "./Price";
import InstantBook from "./InstantBook";
import MoreFilters from "./MoreFilters/";
import MoreFiltersDropdown from "./MoreFiltersDropdown";

export default class Filter extends React.Component {
  state = {
    isOpen: false,
    openedFilter: "",
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
    adults: 0,
    children: 0,
    infants: 0
  };

  toggleOpen = e => {
    if (e.target.name === this.state.openedFilter) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    } else {
      this.setState({
        isOpen: true,
        openedFilter: e.target.name
      });
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate: startDate, endDate: endDate });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput: focusedInput || "startDate" });
  };

  setDatesTitle = () => {
    return (
      (this.state.startDate
        ? this.state.startDate.format("MMM Do")
        : "Check in") +
      " - " +
      (this.state.endDate ? this.state.endDate.format("MMM Do") : "Check out")
    );
  };

  render() {
    return (
      <Filters>
        <ContainerFlex>
          <Dropdown
            name="Dates"
            isOpen={this.state.isOpen && this.state.openedFilter === "Dates"}
            setActiveTitle={this.setDatesTitle}
            toggleOpen={this.toggleOpen}
          >
            <Calendar
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Dropdown>

          <Dropdown
            name="Guests"
            isOpen={this.state.isOpen && this.state.openedFilter === "Guests"}
            toggleOpen={this.toggleOpen}
            mobileTitle="Save"
          >
            <Guests />
          </Dropdown>

          <Dropdown
            name="Room Type"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "Room Type"
            }
            toggleOpen={this.toggleOpen}
            showLg
          >
            <RoomType />
          </Dropdown>

          <Dropdown
            name="Price"
            isOpen={this.state.isOpen && this.state.openedFilter === "Price"}
            toggleOpen={this.toggleOpen}
            showLg
          >
            <Price />
          </Dropdown>

          <Dropdown
            name="Instant Book"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "Instant Book"
            }
            toggleOpen={this.toggleOpen}
            showLg
          >
            <InstantBook />
          </Dropdown>

          <MoreFiltersDropdown
            name="More filters"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "More filters"
            }
            toggleOpen={this.toggleOpen}
          >
            <MoreFilters />
          </MoreFiltersDropdown>
        </ContainerFlex>
      </Filters>
    );
  }
}

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
    isActive: {
      dates: false,
      guests: false,
      roomtype: false,
      price: false,
      instantBook: false,
      moreFilters: false
    },
    openedFilter: "",
    dates: {
      startDate: null,
      endDate: null,
      focusedInput: "startDate"
    },
    guests: {
      adults: 0,
      children: 0,
      infants: 0
    },
    roomsAndBeds: {
      bedrooms: 0,
      beds: 0,
      bathrooms: 0
    },
    price: {
      min: 10,
      max: 1000,
      startPrice: 10,
      endPrice: 1000
    },
    roomtype: { entire: false, private: false, shared: false },
    amenities: { heating: false, kitchen: false, tv: false, wireless: false },
    facilities: {
      elebator: false,
      freeParking: false,
      pool: false,
      wheelchair: false
    },
    instantBook: false,
    superhost: false,
    counterMax: 16,
    counterMin: 0
  };

  initialState = this.state;

  toggleOpen = e => {
    if (e.target.id === this.state.openedFilter) {
      this.setState({
        openedFilter: null
      });
    } else {
      this.setState({
        openedFilter: e.target.id
      });
    }
  };

  onApply = key => {
    this.setState(prevState => ({
      isActive: { ...prevState.isActive, [key]: true },
      openedFilter: null
    }));
  };

  onCancel = key => {
    if (key === "moreFilters") {
      if (document.documentElement.clientWidth < 992) {
        this.setState(prevState => ({
          instantBook: this.initialState.instantBook,
          roomtype: this.initialState.roomtype,
          price: this.initialState.price,
          roomsAndBeds: this.initialState.roomsAndBeds,
          superhost: this.initialState.superhost,
          amenities: this.initialState.amenities,
          facilities: this.initialState.facilities,
          isActive: { ...prevState.isActive, [key]: false },
          openedFilter: null
        }));
      } else {
        this.setState(prevState => ({
          roomsAndBeds: this.initialState.roomsAndBeds,
          superhost: this.initialState.superhost,
          amenities: this.initialState.amenities,
          facilities: this.initialState.facilities,
          isActive: { ...prevState.isActive, [key]: false },
          openedFilter: null
        }));
      }
    } else {
      this.setState(prevState => ({
        [key]: this.initialState[key],
        isActive: { ...prevState.isActive, [key]: false },
        openedFilter: null
      }));
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(prevState => ({
      dates: { ...prevState.dates, startDate: startDate, endDate: endDate }
    }));
  };

  onFocusChange = focusedInput => {
    this.setState(prevState => ({
      dates: { ...prevState.dates, focusedInput: focusedInput || "startDate" }
    }));
  };

  getDatesTitle = () => {
    return (
      (this.state.dates.startDate
        ? this.state.dates.startDate.format("MMM Do")
        : "Check in") +
      " - " +
      (this.state.dates.endDate
        ? this.state.dates.endDate.format("MMM Do")
        : "Check out")
    );
  };

  getGuestsTitle = () => {
    return (
      Object.values(this.state.guests).reduce((sum, c) => (sum += c), 0) +
      " guests"
    );
  };

  PlusGuestCount = (key, type) => {
    if (this.state.guests[key] < this.state.counterMax) {
      this.setState(prevState => ({
        guests: { ...prevState.guests, [key]: this.state.guests[key] + 1 }
      }));
    }
  };

  MinusGuestCount = key => {
    if (this.state.guests[key] > this.state.counterMin)
      this.setState(prevState => ({
        guests: { ...prevState.guests, [key]: this.state.guests[key] - 1 }
      }));
  };

  PlusRoomsCount = key => {
    if (this.state.roomsAndBeds[key] < this.state.counterMax) {
      this.setState(prevState => ({
        roomsAndBeds: {
          ...prevState.roomsAndBeds,
          [key]: this.state.roomsAndBeds[key] + 1
        }
      }));
    }
  };

  MinusRoomsCount = key => {
    if (this.state.roomsAndBeds[key] > this.state.counterMin)
      this.setState(prevState => ({
        roomsAndBeds: {
          ...prevState.roomsAndBeds,
          [key]: this.state.roomsAndBeds[key] - 1
        }
      }));
  };

  onToggleRoomTypes = key => {
    this.setState(prevState => ({
      roomtype: { ...prevState.roomtype, [key]: !this.state.roomtype[key] }
    }));
  };

  onUpdatePrice = sliderState => {
    this.setState(prevState => ({
      price: {
        ...prevState.price,
        startPrice: sliderState.values[0],
        endPrice: sliderState.values[1]
      }
    }));
  };

  onToggleInstantBook = () => {
    this.setState({ instantBook: !this.state.instantBook });
  };

  onToggleSuperhost = () => {
    this.setState({ superhost: !this.state.superhost });
  };

  getRoomTypesCount = roomtypes => {
    return Object.keys(this.state.roomtype).filter(
      key => this.state.roomtype[key]
    ).length;
  };

  onToggleAmenities = key => {
    this.setState(prevState => ({
      amenities: { ...prevState.amenities, [key]: !this.state.amenities[key] }
    }));
  };

  onToggleFacilities = key => {
    this.setState(prevState => ({
      facilities: {
        ...prevState.facilities,
        [key]: !this.state.facilities[key]
      }
    }));
  };

  render() {
    return (
      <Filters>
        <ContainerFlex>
          <Dropdown
            id="dates"
            name="Dates"
            isOpen={this.state.openedFilter === "dates"}
            isActive={this.state.isActive.dates}
            setActiveTitle={this.getDatesTitle}
            toggleOpen={this.toggleOpen}
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
          >
            <Calendar
              startDate={this.state.dates.startDate}
              endDate={this.state.dates.endDate}
              focusedInput={this.state.dates.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </Dropdown>
          <Dropdown
            id="guests"
            name="Guests"
            isOpen={this.state.openedFilter === "guests"}
            isActive={this.state.isActive.guests}
            toggleOpen={this.toggleOpen}
            setActiveTitle={this.getGuestsTitle}
            mobileTitle="Save"
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
          >
            <Guests
              guests={this.state.guests}
              guestsMin={this.state.counterMin}
              guestsMax={this.state.counterMax}
              handlePlusCount={this.PlusGuestCount}
              handleMinusCount={this.MinusGuestCount}
            />
          </Dropdown>
          <Dropdown
            id="roomtype"
            name="Room Type"
            isOpen={this.state.openedFilter === "roomtype"}
            isActive={this.state.isActive.roomtype}
            toggleOpen={this.toggleOpen}
            setActiveTitle={this.getRoomTypesTitle}
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
            showLg
          >
            <RoomType
              onToggle={this.onToggleRoomTypes}
              roomtype={this.state.roomtype}
            />
          </Dropdown>
          <Dropdown
            id="price"
            name="Price"
            isOpen={this.state.openedFilter === "price"}
            isActive={this.state.isActive.price}
            toggleOpen={this.toggleOpen}
            setActiveTitle={this.getPriceTitle}
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
            showLg
          >
            <Price
              onUpdatePrice={this.onUpdatePrice}
              price={this.state.price}
            />
          </Dropdown>
          <Dropdown
            id="instantBook"
            name="Instant Book"
            isOpen={this.state.openedFilter === "instantBook"}
            isActive={this.state.isActive.instantBook}
            toggleOpen={this.toggleOpen}
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
            showLg
          >
            <InstantBook
              isChecked={this.state.instantBook}
              onToggle={this.onToggleInstantBook}
            />
          </Dropdown>
          <MoreFiltersDropdown
            id="moreFilters"
            name="More filters"
            isOpen={this.state.openedFilter === "moreFilters"}
            isActive={this.state.isActive.moreFilters}
            setActiveTitle={this.getMoreFiltersTitle}
            toggleOpen={this.toggleOpen}
            handlerApply={this.onApply}
            handlerCancel={this.onCancel}
          >
            <MoreFilters
              onToggleRoomTypes={this.onToggleRoomTypes}
              roomtype={this.state.roomtype}
              onUpdatePrice={this.onUpdatePrice}
              price={this.state.price}
              rooms={this.state.roomsAndBeds}
              roomsMin={this.state.counterMin}
              roomsMax={this.state.counterMax}
              handlePlusCount={this.PlusRoomsCount}
              handleMinusCount={this.MinusRoomsCount}
              instantBook={this.state.instantBook}
              onToggleInstantBook={this.onToggleInstantBook}
              superhost={this.state.superhost}
              onToggleSuperhost={this.onToggleSuperhost}
              amenities={this.state.amenities}
              onToggleAmenities={this.onToggleAmenities}
              facilities={this.state.facilities}
              onToggleFacilities={this.onToggleFacilities}
            />
          </MoreFiltersDropdown>
        </ContainerFlex>
      </Filters>
    );
  }
}

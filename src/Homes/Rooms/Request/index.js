import React from "react";
import styled from "styled-components";
import stars from "../../../UI/stars.svg";
import lamp from "../lamp.png";
import arrow from "./arrow.svg";

const Container = styled.div`
  @media (min-width: 992px) {
    padding-top: 16px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 24px;
    width: 100%;
    background: #ffffff;
    border: 1px solid rgba(118, 118, 118, 0.2);
  }
`;

const Header = styled.header`
  @media (min-width: 992px) {
    padding-bottom: 24px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  }
`;

const Price = styled.span`
  @media (min-width: 992px) {
    display: inline-block;
    margin-bottom: 8px;
    font-family: "Circular", sans-serif;
    font-size: 24px;
    color: #383838;
  }
`;

const Details = styled.span`
  @media (min-width: 992px) {
    display: inline-block;
    margin-left: 4px;
    font-family: "Circular Air Book", sans-serif;
    font-size: 12px;
    color: #636363;
  }
`;

const Label = styled.label`
  @media (min-width: 992px) {
    font-family: "Circular Air Book", sans-serif;
    font-size: 12px;
    color: #383838;
    margin-bottom: 8px;
    display: block;
  }
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 16px;
`;

const DateInput = styled.input`
  @media (min-width: 992px) {
    background: #ffffff;
    border: 1px solid rgba(118, 118, 118, 0.2);
    width: 85%;
    padding: 11px;
  }

  ::placeholder {
    font-family: "Circular Air Book", sans-serif;
    font-size: 14px;
    color: #636363;
  }
`;

const Select = styled.select`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
`;

const Footer = styled.footer`
  @media (min-width: 992px) {
    padding-top: 24px;
    margin-top: 16px;
    border-top: 1px solid rgba(118, 118, 118, 0.2);
    background: url(${lamp}) no-repeat;
    background-position: right 0 top 24px;
  }
`;

const Guests = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  padding: 12px;
  width: 100%;

  border: 1px solid rgba(118, 118, 118, 0.2);
  box-sizing: border-box;

  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #636363;

  background: url(${arrow}) no-repeat;
  background-size: 15.16px 8.42px;
  background-position: 96% 18px;
`;

const SelectContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const RequestButton = styled.button`
  background: #ff5a5f;
  border-radius: 4px;
  border: none;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;
  padding: 9px 0;
  text-align: center;
  color: #ffffff;
  display: block;
  width: 100%;
`;

const NotesContainer = styled.div`
  text-align: center;
  margin-top: 11px;
`;

const Notes = styled.span`
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;
  color: #383838;
`;

const ViewsStats = styled.p`
  max-width: 80%;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #383838;
  margin: 0;
  margin-bottom: 4px;
`;

const Comment = ViewsStats.extend`
  font-family: "Circular Air Light", sans-serif;
`;

const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export default () => {
  return (
    <Container>
      <Header>
        <Price>$41</Price>
        <Details>per night</Details>
        <br />
        <Stars src={stars} />
        <Details>111</Details>
      </Header>
      <form>
        <DatesContainer>
          <div>
            <Label for="check-in">Check In</Label>

            <DateInput
              id="check-in"
              type="text"
              placeholder="mm/dd/yyyy"
              name="check-in"
            />
          </div>
          <div>
            <Label for="check-out">Check Out</Label>

            <DateInput
              id="check-out"
              type="text"
              placeholder="mm/dd/yyyy"
              name="check-out"
              rightBorder
            />
          </div>
        </DatesContainer>

        <Label for="guests">Guests</Label>
        <SelectContainer>
          <Guests>1 guest</Guests>
          <Select id="guests" name="guests">
            <option>1 guest</option>
            <option>2 guest</option>
          </Select>
        </SelectContainer>
        <RequestButton type="submit">Request to book</RequestButton>

        <NotesContainer>
          <Notes>You won’t be charged yet</Notes>
        </NotesContainer>
      </form>

      <Footer>
        <ViewsStats>This home is on people’s minds.</ViewsStats>
        <Comment>It’s been viewed 500+ times in the past week.</Comment>
      </Footer>
    </Container>
  );
};

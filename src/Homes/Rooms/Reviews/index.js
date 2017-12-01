import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import searchIcon from "./searchIcon.svg";
import Review from "./Review";
import marlee from "./marleeAvatar.png";
import michelle from "./michelleAvatar.png";
import Paginator from "./Paginator";

const Section = styled.section`
  position: relative;
  padding-top: 50px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 18px;
  font-family: "Circular", sans-serif;
  font-size: 24px;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 4px;
  }
`;

const SearchBox = styled.div`
  display: inline-block;
  width: 85%;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 100%;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #ffffff url(${searchIcon}) no-repeat;
  background-size: 14.56px 15.38px;
  background-position: 12.15px 12.15px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;

  font-size: 14px;
  color: #383838;

  @media (min-width: 768px) {
    background-size: 15.25px 15.38px;
    padding-left: 34px;
    background-position: 9.15px 7.15px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  ::placeholder {
    font-family: "Circular Air Book", sans-serif;
    color: #383838;
    font-size: 14px;
  }
`;

const SettingsBlock = styled.div`
  margin-top: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Settings = styled.span`
  display: inline-block;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: flex-end;
`;

const ReadMore = styled.button`
  display: block;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #0f7276;
  border: none;
  background: none;
  padding: 0;

  @media (min-width: 992px) {
    display: inline-block;
    margin-left: 5px;
  }
`;

export default () => {
  return (
    <Section id="reviews">
      <div className="row between-md middle-md">
        <div className="col-xs-12 col-md-6">
          <Title>
            113 Reviews <Rating />
          </Title>
        </div>

        <div className="col-xs-12 col-md-4">
          <SearchBox>
            <Input placeholder="Search reviews" type="text" />
          </SearchBox>
        </div>
      </div>
      <SettingsBlock>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <SettingsContainer>
              <Settings>Accuracy</Settings>
              <Rating />
            </SettingsContainer>
            <SettingsContainer>
              <Settings>Communication</Settings>
              <Rating />
            </SettingsContainer>
            <SettingsContainer>
              <Settings>Cleanliness</Settings>
              <Rating />
            </SettingsContainer>
          </div>
          <div className="col-xs-12 col-md-6">
            <SettingsContainer>
              <Settings>Location</Settings>
              <Rating />
            </SettingsContainer>
            <SettingsContainer>
              <Settings>Check In</Settings>
              <Rating />
            </SettingsContainer>
            <SettingsContainer>
              <Settings>Value</Settings>
              <Rating />
            </SettingsContainer>
          </div>
        </div>
      </SettingsBlock>
      <Review src={marlee} name="Marlee" period="November 2017">
        This was one of my favourite places we stayed in all on Colombia. A very
        peaceful setting and a great spot to unwind.
      </Review>
      <Review src={michelle} name="Michelle" period="November 2017">
        What an absolutely wonderful place to stay! Yudy and Victoria were so
        kind and lovely, even after we arrived super late due to problems at the
        airport, and Hernando our driver was super friendly and really patient
        with our little Spanish. Victoria was a lovely host and gave us so…
        <ReadMore>Read more</ReadMore>
      </Review>
      <Paginator />
    </Section>
  );
};

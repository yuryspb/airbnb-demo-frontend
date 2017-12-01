import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import mdMedal from "../mdMedal.svg";
import mdHostPhoto from "../mdHostPhoto.png";

import guestIcon from "./guestIcon.svg";

import arrow from "../arrowDown.svg";
import bedIcon from "./bedIcon.svg";
import bathIcon from "./bathIcon.svg";
import doorIcon from "./doorIcon.svg";
import lamp from "../lamp.png";
import smParking from "./smParking.svg";
import smInternet from "./smInternet.svg";
import smWiFi from "./smWiFi.svg";
import smFamily from "./smFamily.svg";
import mdFamily from "./mdFamily.svg";
import lgFamily from "./lgFamily.svg";
import cancellation from "./cancellationIcon.svg";

const Section = styled.section`
  position: relative;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-top: 24px;
  }
`;

const Avatar = styled.div`
  position: absolute;
  top: 80px;
  right: 14px;
  padding: 2px;

  @media (min-width: 768px) {
    top: 35px;
  }
`;

const Photo = styled.img`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const Medal = styled.img`
  width: 10px;
  height: 19px;
  position: absolute;
  right: 0;
  top: 28px;

  @media (min-width: 768px) {
    width: 16px;
    height: 30px;
    top: 40px;
  }
`;

const Name = styled.span`
  display: block;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  text-align: center;
  color: #636363;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-family: "Circular", sans-serif;
  margin: 0;
  margin-bottom: 18px;
  font-size: 24px;
  color: #383838;

  @media (min-width: 768px) {
    margin-bottom: 4px;
    font-size: 36px;
  }
`;

const Cont = styled.div`
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
  position: relative;
`;

const ReadMore = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  background: none;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  color: #0f7276;
`;

const PlaceRoom = styled.span`
  display: inline-block;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #636363;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Details = styled.div`
  width: 100%;
  margin-top: 33px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin-top: 48px;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;
  color: #383838;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    width: auto;
    margin-right: 30px;
  }
`;

const DetailIcon = styled.img`
  width: 20px;
  height: auto;
  display: inline-flex;
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  margin-bottom: 23px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  color: #383838;
`;

const TextExt = Text.extend`
  margin-bottom: 4px;
  font-family: "Circular Air Book", sans-serif;
`;

const ViewsStats = styled.div`
  margin-bottom: 24px;
  padding: 18px 24px;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.2);
  background-image: url(${lamp});
  background-position: 672px 13px;
  background-repeat: no-repeat;
`;

const Views = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: "Circular Air Book", sans-serif;
  color: #636363;
`;

const ViewsLight = Views.extend`
  font-family: "Circular Air Light", sans-serif;
  margin-top: 4px;
`;

const LinkMore = styled.button`
  display: block;
  padding: 0;
  background: none;
  border: none;
  font-family: "Circular Air Book", sans-serif;
  font-size: 16px;
  color: #0f7276;
  margin-bottom: 23px;
  cursor: pointer;
`;

const Arrow = styled.img`
  width: 11px;
  height: 6px;
  display: inline-block;
  margin-left: 8px;
`;

const SubHeader = styled.h3`
  margin: 0;
  margin-top: 23px;
  margin-bottom: 16px;
  font-family: "Circular", sans-serif;
  font-size: 16px;
  color: #383838;
`;

const SmallHeader = styled.h4`
  margin: 0;
  margin-bottom: 16px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Amenities = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Amenity = styled.div`
  width: 200px;
  padding-left: 28px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;
  color: #383838;
  margin-bottom: 27px;
  min-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Internet = Amenity.extend`
  background: url(${smInternet}) no-repeat;
`;

const WiFi = Amenity.extend`
  background: url(${smWiFi}) no-repeat;
`;

const Family = Amenity.extend`
  background: url(${smFamily}) no-repeat;

  @media (min-width: 768px) {
    background: url(${mdFamily}) no-repeat;
  }

  @media (min-width: 992px) {
    background: url(${lgFamily}) no-repeat;
  }
`;

const Parking = Amenity.extend`
  background: url(${smParking}) no-repeat;
  background-position: 0 5px;

  @media (min-width: 768px) {
    background-position: 0 0;
  }
`;

const Hr = styled.hr`
  width: 65px;
  height: 1px;
  background: #767676;
  opacity: 0.2;
  margin: 20px 0;
`;

const CancelIcon = styled.img`
  position: absolute;
  width: 38px;
  height: 40px;
  top: 45px;
  right: 0;

  @media (min-width: 768px) {
    width: 40px;
    height: 45px;
    top: 35px;
    right: 20px;
  }
`;

export default () => {
  return (
    <Section id="overview">
      <Avatar>
        <Photo src={mdHostPhoto} alt="Host photo" />
        <Medal src={mdMedal} alt="Medal" />
        <MediaQuery minWidth="768px">
          <Name>
            Yudi &<br />Victoria
          </Name>
        </MediaQuery>
      </Avatar>
      <Title>Romantic Cabana with view</Title>
      <Cont>
        <PlaceRoom>Entire cabin · Armenia</PlaceRoom>
        <Details>
          <Detail>
            <DetailIcon src={guestIcon} alt="Guets" />2 guests
          </Detail>
          <Detail>
            <DetailIcon src={bedIcon} alt="Beds" />2 beds
          </Detail>
          <Detail>
            <DetailIcon src={doorIcon} alt="Room" />Studio
          </Detail>
          <Detail>
            <DetailIcon src={bathIcon} alt="Bath" />1 bath
          </Detail>
        </Details>

        <MediaQuery minWidth={576} maxWidth={991}>
          <ViewsStats>
            <Views>This home is on people’s minds</Views>
            <ViewsLight>
              It’s been viewed 500+ times in the past week.
            </ViewsLight>
          </ViewsStats>
        </MediaQuery>

        <Text>
          Located in the coffee region, in the Andean mountains of Colombia,
          South America, a charming cabana made from bamboo, with a great view
          and a "sendero" or pathway through the bamboo forest which
          criss-crosses our 5 acre organic farm, leading down to a stream. A
          place to relax and commune with nature.
        </Text>

        <LinkMore>
          Read more about the space <Arrow src={arrow} alt="Arrow" />
        </LinkMore>
        <LinkMore>Contact host</LinkMore>
      </Cont>

      <Cont>
        <SubHeader>Amenities</SubHeader>
        <Amenities>
          <div className="col-xs-6">
            <Internet>Internet</Internet>
          </div>
          <div className="col-xs-6">
            <Family>Family/kid friendly</Family>
          </div>
          <div className="col-xs-6">
            <WiFi>Wireless Internet</WiFi>
          </div>
          <div className="col-xs-6">
            <Parking>Free parking on premises</Parking>
          </div>
        </Amenities>
        <LinkMore>
          Show all amenities <Arrow src={arrow} alt="Arrow" />
        </LinkMore>
      </Cont>

      <Cont>
        <SubHeader>Always communicate through Airbnb</SubHeader>
        <Text>
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </Text>
        <LinkMore>Learn more</LinkMore>
      </Cont>

      <Cont>
        <SubHeader>House Rules</SubHeader>
        <Text>
          Check-in is anytime after 1PM<br />Check out by 11AM
        </Text>
        <LinkMore>
          Read all rules <Arrow src={arrow} alt="Arrow" />
        </LinkMore>
      </Cont>

      <Cont>
        <CancelIcon src={cancellation} alt="Cancellation" />
        <SubHeader>Cancellations</SubHeader>
        <TextExt>Free cancellation</TextExt>
        <Text>
          Cancel within 48 hours of booking
          <MediaQuery maxWidth="767px">
            <br />
          </MediaQuery>to get a full refund.
        </Text>
        <Hr />
        <SmallHeader>Flexible</SmallHeader>
        <Text>
          Cancel up to 24 hours before check in and get a full refund (minus
          service fees). Cancel within 24 hours of your trip and the firs…
          <ReadMore>Read more</ReadMore>
        </Text>
      </Cont>
    </Section>
  );
};

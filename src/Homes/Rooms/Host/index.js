import React from "react";
import styled from "styled-components";
import mdMedal from "../mdMedal.svg";
import hostAvatar from "./hostAvatar.png";
import verifiedIcon from "./verifiedIcon.svg";

const Section = styled.section`
  position: relative;
  padding-bottom: 50px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  max-width: 75%;
  font-family: "Circular", sans-serif;
  font-size: 24px;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 8px;
    max-width: 80%;
  }
`;

const PhotoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px;

  @media (min-width: 768px) {
    top: -10px;
    right: 10px;
  }
`;

const Photo = styled.img`
  width: 60px;
  height: 60px;

  @media (min-width: 768px) {
    width: 88px;
    height: 88px;
  }
`;

const Medal = styled.img`
  width: 16px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 36px;

  @media (min-width: 768px) {
    top: 60px;
  }
`;

const AdditionalInfo = styled.p`
  margin: 0;
  margin-bottom: 12px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  color: #636363;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 163px;
  }
`;

const StatusText = styled.span`
  display: inline-block;
  margin-left: 16px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #636363;
`;

const ReviewsCounter = styled.button`
  background: linear-gradient(
    137.16deg,
    rgba(255, 195, 51, 0.8) 0%,
    #ffc333 41.52%,
    #ffb400 41.62%,
    #ffb400 100%
  );
  border-radius: 6px;
  border: none;
  margin: none;
  padding: 6px 10px;
  font-family: "Circular", sans-serif;
  font-size: 18px;
  color: #ffffff;
`;

const VerifiedIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const Descr = styled.p`
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;
  margin-top: 12px;
  margin-bottom: 16px;
`;

const ReadMore = styled.button`
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #0f7276;
  border: none;
  background: none;
  padding: 0;
  display: inline-block;
`;

const ContactButton = styled.button`
  background: #ffffff;
  border: 1px solid #008489;
  background: none;
  border-radius: 2px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #0f7276;
  padding: 7px 12px;
`;

const Details = styled.div`
  margin-top: 24px;
`;

const Detail = styled.p`
  margin: 0;
  margin-bottom: 4px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
`;

const BoldText = styled.span`
  font-family: "Circular Air Book", sans-serif;
`;

export default () => {
  return (
    <Section id="host">
      <PhotoContainer>
        <Photo src={hostAvatar} alt="Host photo" />
        <Medal src={mdMedal} alt="Medal icons" />
      </PhotoContainer>
      <Title>Hosted by Yudy & Victoria</Title>
      <AdditionalInfo>
        Santa Ana, California, United States · Joined in August 2014
      </AdditionalInfo>

      <StatusContainer>
        <Status>
          <ReviewsCounter>153</ReviewsCounter>
          <StatusText>Reviews</StatusText>
        </Status>

        <Status>
          <VerifiedIcon src={verifiedIcon} alt="Reviews" />
          <StatusText>Verified</StatusText>
        </Status>
      </StatusContainer>

      <Descr>
        Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
        would be your hostess on the property. I live in California and am the
        owner of the property. It is my goal to create a "boutique eco-resort"
        on the approximately 5 acre farm we have in the coffee growing reg…{" "}
        <ReadMore>Read more</ReadMore>
      </Descr>
      <ContactButton>Contact host</ContactButton>

      <Details>
        <Detail>
          Languages: <BoldText>English, Español</BoldText>
        </Detail>
        <Detail>
          Response rate: <BoldText>100%</BoldText>
        </Detail>
        <Detail>
          Response time: <BoldText>within a few hours</BoldText>
        </Detail>
      </Details>
    </Section>
  );
};

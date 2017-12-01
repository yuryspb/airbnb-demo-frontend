import React from "react";
import mainPicture from "./main.jpg";
import smShare from "./smShare.svg";
import smLike from "./smLike.svg";
import lgShare from "./lgShare.svg";
import lgLike from "./lgLike.svg";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const PhotoContainer = styled.div`
  background: url(${mainPicture}) no-repeat;
  width: 100%;
  min-height: 290px;
  background-size: cover;
  padding-top: 80px;

  @media (min-width: 768px) {
    min-height: 360px;
  }

  @media (min-width: 992px) {
    min-height: 440px;
  }
`;

const ButtonsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 290px;

  @media (min-width: 768px) {
    min-height: 360px;
  }

  @media (min-width: 992px) {
    min-height: 440px;
  }
`;

const SocialButton = styled.button`
  border: none;
  background-size: contain;
  border-radius: 0;

  @media (min-width: 768px) {
    width: auto;
    height: auto;
    background-position: 16px 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 44px;
    padding-right: 16px;
    background-color: #ffffff;
    border-radius: 4px;
    font-family: "Circular Air Book", sans-serif;
    font-size: 14px;
    color: #383838;
  }
`;

const Share = SocialButton.extend`
  background: url(${smShare}) no-repeat;
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    background-image: url(${lgShare});
  }
`;

const Like = SocialButton.extend`
  width: 26px;
  height: 23px;
  background: url(${smLike}) no-repeat;
  margin-left: 16px;

  @media (min-width: 768px) {
    background-image: url(${lgLike});
  }
`;

const SocialButtons = styled.div`
  position: absolute;
  top: 15px;
  right: 6px;
  z-index: 10;

  @media (min-width: 768px) {
    top: 16px;
    right: 0px;
  }
`;

const ViewPhotos = styled.button`
  position: absolute;
  border: none;
  background: #ffffff;
  border-radius: 4px;
  padding: 12px 16px;
  bottom: 16px;
  right: 4px;
  z-index: 10;
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;
  color: #383838;

  @media (min-width: 768px) {
    bottom: 24px;
    left: 0px;
    font-family: "Circular Air Book", sans-serif;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <PhotoContainer>
      <div className="container">
        <ButtonsContainer>
          <SocialButtons>
            <Share>
              <MediaQuery minWidth="768px">Share</MediaQuery>
            </Share>
            <Like>
              <MediaQuery minWidth="768px">Like</MediaQuery>
            </Like>
          </SocialButtons>

          <ViewPhotos>View Photos</ViewPhotos>
        </ButtonsContainer>
      </div>
    </PhotoContainer>
  );
};

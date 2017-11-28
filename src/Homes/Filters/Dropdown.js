import React from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";
import closeIcon from "./close.svg";

export const Header = styled.header`
  display: flex;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  width: 100%;

  @media (min-width: 576px) {
    justify-content: space-between;
    position: static;
  }
`;

export const Button = styled.button`
  margin-right: 12px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  cursor: pointer;
  color: #383838;
  cursor: pointer;

  display: ${props => (props.showLg ? "none" : "block")};
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};

  @media (min-width: 991px) {
    display: flex;
  }
`;

export const Close = styled.a`
  cursor: pointer;
`;

export const Title = styled.span`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

export const Clear = styled.span`
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #0f7276;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  display: none;
  cursor: pointer;

  @media (min-width: 576px) {
    display: block;
    width: 110px;
    height: 64px;
    font-family: "Circular Air Book", sans-serif;
    font-size: 16px;
    background-color: #fff;
    border: none;
    color: ${props => (props.isPrimary ? "#008489" : "#636363")};
  }
`;

export const MobileButton = styled.button`
  padding: 12px 132px;
  background-color: #ff5a5f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: "Circular Air", sans-serif;
  font-size: 18px;
  cursor: pointer;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  display: flex;
  padding-top: 40px;
  padding-left: 10px;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const Info = styled.div`
  border: none;
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  color: ${props => (props.isActive ? "#0F7276" : "#636363")};
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
`;

export const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

export const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;

  @media (min-width: 576px) {
    display: inline-block;
    position: absolute;
    top: 100%;
    right: auto;
    left: auto;
    bottom: auto;
    background-color: #fff;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
  }
`;

export const Overflow = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const Image = styled.img`
  cursor: pointer;
`;

export default function(props) {
  const onApply = () => props.handlerApply(props.id);
  const onCancel = () => props.handlerCancel(props.id);

  return (
    <div>
      <Button
        id={props.id}
        onClick={props.toggleOpen}
        isOpen={props.isOpen}
        isActive={props.isActive}
        showLg={props.showLg}
        name={props.name}
      >
        {props.setActiveTitle && props.isOpen
          ? props.setActiveTitle()
          : props.name}
      </Button>
      {props.isOpen && (
        <div>
          <Overflow />
          <DropDownWrapper>
            <Header>
              <Close onClick={props.toggleOpen}>
                <img src={closeIcon} alt="arrow" />
              </Close>
              <Title>{props.name}</Title>
              <Clear>{props.clearTitle || "Reset"}</Clear>
            </Header>

            {props.children}

            <Footer>
              <ConfirmButton onClick={onCancel}>Cancel</ConfirmButton>
              <ConfirmButton onClick={onApply} isPrimary>
                Apply
              </ConfirmButton>
              {props.mobileTitle && (
                <MobileButton>{props.mobileTitle}</MobileButton>
              )}
            </Footer>
          </DropDownWrapper>
        </div>
      )}
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import arrow from "./arrowRight.svg";
import closeIcon from "./close.svg";

const Header = styled.header`
  display: flex;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 576px) {
    display: none;
  }
`;

const Footer = styled.div`
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

const Button = styled.button`
  margin-right: 12px;
  padding: 7px 16px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  cursor: pointer;

  display: ${props => (props.showLg ? "none" : "block")};
  background-color: ${props => (props.isOpen ? "#008489" : "#fff")};
  color: ${props => (props.isOpen ? "#fff" : "#383838")};

  @media (min-width: 991px) {
    display: flex;
  }
`;

const Close = styled.a``;

const Title = styled.span`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
`;

const Clear = styled.span`
  font-family: "Circular Air Book", sans-serif;
  font-size: 14px;
  color: #0f7276;
`;

const ConfirmButton = styled.button`
  display: none;

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

const MobileButton = styled.button`
  padding: 12px 132px;
  background-color: #ff5a5f;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-family: "Circular Air", sans-serif;
  font-size: 18px;

  @media (min-width: 576px) {
    display: none;
  }
`;

const MobileTitle = styled.div`
  padding-top: 40px;
  padding-left: 10px;
  display: flex;
  @media (min-width: 576px) {
    display: none;
  }
`;

const Info = styled.div`
  border: none;
  border-bottom: ${props => (props.isActive ? "1px solid #008489" : "none")};
  color: ${props => (props.isActive ? "#0F7276" : "#636363")};
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
`;

const Arrow = styled.img`
  margin-left: 16px;
  margin-right: 16px;
`;

const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;

  @media (min-width: 576px) {
    position: absolute;
    display: inline-block;
    top: 100%;
    right: auto;
    left: auto;
    bottom: auto;
    background-color: #fff;
    padding: 24px 16px 0 16px;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.08);
  }
`;

export default class Dropdown extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.toggleOpen}
          isOpen={this.state.isOpen}
          showLg={this.props.showLg}
        >
          {this.props.activeTitle && this.state.isOpen
            ? this.props.activeTitle
            : this.props.name}
        </Button>
        {this.state.isOpen && (
          <div>
            <DropDownWrapper>
              <Header>
                <Close onClick={this.close}>
                  <img src={closeIcon} alt="arrow" />
                </Close>
                <Title>{this.props.name}</Title>
                <Clear>{this.props.clearTitle || "Reset"}</Clear>
              </Header>
              {this.props.activeTitle && (
                <MobileTitle>
                  <Info isActive>Check-in</Info>
                  <Arrow src={arrow} />
                  <Info>Check-out</Info>
                </MobileTitle>
              )}
              {this.props.children}
              <Footer>
                <ConfirmButton onClick={this.close}>Cancel</ConfirmButton>
                <ConfirmButton onClick={this.close} isPrimary>
                  Apply
                </ConfirmButton>
                {this.props.mobileTitle && (
                  <MobileButton>{this.props.mobileTitle}</MobileButton>
                )}
              </Footer>
            </DropDownWrapper>
          </div>
        )}
      </div>
    );
  }
}

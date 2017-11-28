import React from "react";
import styled from "styled-components";
import {
  Button,
  Header,
  Title,
  MobileButton,
  Close,
  Clear,
  Image,
  Overflow
} from "./Dropdown";
import closeIcon from "./close.svg";

const DropDownWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;

  @media (min-width: 576px) {
    top: 136px;
  }

  @media (min-width: 991px) {
    display: inline-block;
    top: 136px;
    right: auto;
    width: 60%;
    background-color: #fff;
    padding-left: 80px;
  }
`;

const ConfirmButton = styled.button`
  display: none;
  cursor: pointer;

  @media (min-width: 576px) {
    display: block;
    padding: 12px 28px;
    background-color: #008489;
    font-family: "Circular Air Book", sans-serif;
    font-size: 18px;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
`;

const CancelButton = styled.button`
  display: none;
  cursor: pointer;

  @media (min-width: 576px) {
    display: block;
    padding: 12px 28px;
    font-family: "Circular Air Book", sans-serif;
    font-size: 18px;
    color: #383838;
    background-color: transparent;
    border: none;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  @media (min-width: 576px) {
    padding-top: 40px;
  }

  @media (min-width: 991px) {
    justify-content: flex-end;
    padding-top: 32px;
  }
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
        {props.activeTitle && props.isOpen ? props.activeTitle : props.name}
      </Button>
      {props.isOpen && (
        <div>
          <Overflow />
          <DropDownWrapper>
            <Header>
              <Close onClick={props.toggleOpen}>
                <Image src={closeIcon} />
              </Close>
              <Title>All filters (0)</Title>
              <Clear>Clear All</Clear>
            </Header>
            {props.children}
            <Footer>
              <CancelButton onClick={onCancel}>Cancel</CancelButton>
              <ConfirmButton onClick={onApply} isPrimary>
                See homes
              </ConfirmButton>
              <MobileButton>See homes</MobileButton>
            </Footer>
          </DropDownWrapper>
        </div>
      )}
    </div>
  );
}

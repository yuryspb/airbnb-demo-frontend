import React from "react";
import styled from "styled-components";
import {
  Button,
  Header,
  Title,
  MobileButton,
  Close,
  Clear,
  Image
} from "./Dropdown";
import closeIcon from "./close.svg";

const ConfirmButton = styled.button``;

const CancelButton = styled.button``;

const Footer = styled.div``;

const DropDownWrapper = styled.div``;

export default function(props) {
  return (
    <div>
      <Button
        onClick={props.toggleOpen}
        isOpen={props.isOpen}
        showLg={props.showLg}
        name={props.name}
      >
        {props.activeTitle && props.isOpen ? props.activeTitle : props.name}
      </Button>
      {props.isOpen && (
        <div>
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
              <CancelButton onClick={props.toggleOpen}>Cancel</CancelButton>
              <ConfirmButton onClick={props.toggleOpen} isPrimary>
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

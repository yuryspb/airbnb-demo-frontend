import React from "react";
import styled from "styled-components";
import checkOn from "./checkRb.svg";
import checkOff from "./unCheckRb.svg";

const Wrapper = styled.button`
  position: relative;
  min-width: 64px;
  width: 64px;
  height: 42px;
  background-color: ${props =>
    props.isChecked ? "#008489" : "rgba(72, 72, 72, 0.08)"};
  border: 1px solid
    ${props =>
      props.isChecked ? "rgba(0, 132, 137, 0.3)" : "rgba(72, 72, 72, 0.3)"};
  border-radius: 24px;
`;

const Circle = styled.div`
  position: absolute;
  top: -1px;
  left: ${props => (props.isChecked ? "23px" : "0px")};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid
    ${props => (props.isChecked ? "#008489" : "rgba(72, 72, 72, 0.3)")};
  border-radius: 50%;
`;

const Icon = styled.img``;

export default class RadioButton extends React.Component {
  state = { checked: false };

  check = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <Wrapper onClick={this.check} isChecked={this.state.checked}>
        <Circle isChecked={this.state.checked}>
          {this.state.checked ? (
            <Icon src={checkOn} />
          ) : (
            <Icon src={checkOff} />
          )}
        </Circle>
      </Wrapper>
    );
  }
}

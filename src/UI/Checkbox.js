import React from "react";
import styled from "styled-components";
import checkOn from "./checkOn.svg";

const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${props => (props.isChecked ? "#008489" : "#fff")};
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;
  cursor: pointer;
`;

const Icon = styled.img``;

export default function(props) {
  const onToggle = e => {
    return props.onToggle(props.name);
  };

  return (
    <Checkbox
      isChecked={props.isChecked}
      name={props.name}
      className={props.className}
      onClick={onToggle}
    >
      <Icon src={checkOn} />
    </Checkbox>
  );
}

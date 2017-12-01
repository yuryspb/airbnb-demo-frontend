import React from "react";
import styled from "styled-components";
import stars from "../../../UI/stars.svg";
import { Card, Image } from "../../styled";

const Label = styled.p`
  font-family: "Circular", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  color: #383838;
  margin: 0;
  margin-top: 10px;
`;

const RedLabel = Label.extend`
  color: #8d1f13;
`;

const Title = styled.p`
  font-family: "Circular", sans-serif;
  font-size: 15px;
  margin: 2px 0;
  color: #383838;
`;

const Price = styled.p`
  font-family: "Circular Air Light", sans-serif;
  font-size: 15px;
  margin: 0;
  margin-bottom: 5px;
  color: #383838;
`;

const Stats = styled.span`
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;
  margin-left: 4px;
`;

const New = styled.div`
  display: inline-block;
  background: #008489;
  border-radius: 2px;
  font-family: "Circular Air Book", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  padding: 3.5px 5.5px;
  color: #ffffff;
`;

export const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export default class SimilarCard extends React.Component {
  render() {
    return (
      <Card className={this.props.className} to={this.props.to}>
        <Image src={this.props.highRes} alt={this.props.alt} />

        {this.props.redLabel ? (
          <RedLabel>{this.props.label}</RedLabel>
        ) : (
          <Label>{this.props.label}</Label>
        )}

        <Title>{this.props.title}</Title>
        <Price>{this.props.price}</Price>

        {this.props.isNew ? (
          <New>New</New>
        ) : (
          <div>
            <Stars src={stars} />
            <Stats>{this.props.stats}</Stats>
          </div>
        )}
      </Card>
    );
  }
}

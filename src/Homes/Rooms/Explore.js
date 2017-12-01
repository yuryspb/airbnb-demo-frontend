import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  padding-bottom: 32px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 24px;
  font-family: "Circular Air Bold", sans-serif;
  font-size: 24px;
  color: #383838;

  @media (min-width: 768px) {
    margin-bottom: 18px;
    font-size: 28px;
  }
`;

const Text = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 4px;
  margin-right: 8px;
  font-family: "Circular Air Light", sans-serif;
  font-size: 18px;
  color: #383838;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`;

const MoreLinks = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  white-space: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: "Circular Air Light", sans-serif;
  font-size: 16px;
  color: #636363;
`;

const Option = styled.a`
  display: block;
  margin-bottom: 2px;
  text-decoration: none;
  font-family: "Circular Air Light", sans-serif;
  font-size: 14px;
  color: #636363;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

const OptionWithMargin = Option.extend`
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

const OptionsBlock = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  max-width: 85%;
`;

export default () => {
  return (
    <Section>
      <Title>Explore other options in and around Armenia</Title>
      <Text>More places to stay in Armenia:</Text>
      <MoreLinks>
        <Link href="#">Apartments</Link> · <Link href="#">Houses</Link> ·{" "}
        <Link href="#">Bed & Breakfasts</Link> · <Link href="#">Lofts</Link> ·{" "}
        <Link href="#">Villas</Link>
      </MoreLinks>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">Cartagena Vacation Rentals</Option>
            <Option href="#">Bucaramanga</Option>
            <Option href="#">Manuel Antonio</Option>
            <Option href="#">
              Cartagena De Indias (Distrito Turistico Y Cultural)
            </Option>
            <Option href="#">Quito</Option>
            <Option href="#">Santander de Quilichao</Option>
          </OptionsBlock>
        </div>
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">San Andrés Vacation Rentals</Option>
            <Option href="#">Bogota</Option>
            <Option href="#">
              Santa Marta (Distrito Turistico Cultural E Historico)
            </Option>
            <Option href="#">Rionegro</Option>
            <Option href="#">Anapoima</Option>
            <Option href="#">PuertoRico</Option>
          </OptionsBlock>
        </div>
        <div className="col-xs-12 col-md-4">
          <OptionsBlock>
            <Option href="#">Willemstad Vacation Rentals</Option>
            <OptionWithMargin href="#">Cali</OptionWithMargin>
            <Option href="#">Chia</Option>
            <Option href="#">Ibague</Option>
            <Option href="#">Medellin</Option>
            <Option href="#">Tabio</Option>
          </OptionsBlock>
        </div>
      </div>
    </Section>
  );
};

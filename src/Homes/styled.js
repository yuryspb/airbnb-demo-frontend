import styled from 'styled-components';
import arrow from './arrow.svg';

export const Homes = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 20px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  @media (min-width: 576px) {
    font-size: 32px;
  }
`;

export const LinkSeeAll = styled.a`
  align-self: center;
  width: 55px;
  margin-bottom: -15px;
  background: url(${arrow}) no-repeat 100% 50%;
  font: 14px 'Circular Air Book', sans-serif;
  color: #383838;
  text-decoration: none;
`;

export const Link = styled.a`
  width: 197px;
  text-align: left;
  text-decoration: none;
  color: #383838;
  font-size: 12px;
  font-family: 'Circular Air Book', sans-serif;

  @media (min-width: 576px) {
    width: 310px;
  }
`;

export const Img = styled.img`
  width: 197px;

  @media (min-width: 576px) {
    width: 310px;
  }
`;

export const Stars = styled.img`
  width: 76px;
  margin-right: 5px;
`;

export const Info = styled.p`
  font-size: 15px;
  margin-top: 7px;
  margin-bottom: 3px;
`;

export const Price = styled.span`
  font-weight: 900;
  font-size: 13px;
  margin-right: 5px;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

export const Name = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font: 12px 'Circular Air Light', sans-serif;

  @media (min-width: 576px) {
    font-size: 15px;
  }
`;

export const BtnNext = styled.a`
  display: none;

  @media (min-width: 991px) {
    display: block;
    position: absolute;
    top: 180px;
    left: 945px;
    width: 40px;
    height: 40px;
  }
`;

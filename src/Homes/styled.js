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
  font-size: 32px;
  margin-bottom: 20px;
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
  width: 310px;
  text-align: left;
  text-decoration: none;
  color: #383838;
  font-size: 12px;
  font-family: 'Circular Air Book', sans-serif;
`;

export const Img = styled.img`
  width: 310px;
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
  font-size: 15px;
  margin-right: 5px;
`;

export const Name = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font: 15px 'Circular Air Light', sans-serif;
`;

export const BtnNext = styled.a`
  position: absolute;
  top: 180px;
  left: 945px;
  width: 40px;
  height: 40px;
`;

import styled from 'styled-components';
import arrow from './arrow.svg';

export const Experiences = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-top: 25px;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 16px;
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
  width: 229px;
  text-align: left;
  text-decoration: none;
  color: #383838;
  font-size: 12px;
  font-family: 'Circular Air Book', sans-serif;
`;

export const Img = styled.img`
  width: 229px;
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
  margin-right: 5px;
`;

export const Name = styled.span`
  font-family: 'Circular Air Light', sans-serif;
`;

export const BtnNext = styled.a`
  position: absolute;
  top: 250px;
  left: 945px;
  width: 40px;
  height: 40px;
`;

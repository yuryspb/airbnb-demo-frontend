import styled from 'styled-components';

export const Explore = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 310px;
  height: 72px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0 2px 0 0 rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  text-decoration: none;
`;

export const Feauters = styled.span`
  padding-left: 24px;
  color: #383838;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 96px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

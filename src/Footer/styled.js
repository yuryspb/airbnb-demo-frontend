import styled from 'styled-components';
import arrow from './arrowDown.svg';

export const Footer = styled.footer`
  margin-top: 65px;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding-top: 50px;
`;

export const Select = styled.select`
  width: 229px;
  height: 48px;
  margin-bottom: 16px;
  padding-left: 10px;
  border-radius: 4px;
  color: #383838;
  font: 18px 'Circular Air Light', sans-serif;
  appearance: none;
  background: url(${arrow}) no-repeat 95% 50%;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavTitle = styled.span`
  margin-bottom: 12px;
  font: 15px 'Circular Air Bold', sans-serif;
  font-weight: bold;
`;

export const Link = styled.a`
  margin-bottom: 8px;
  text-decoration: none;
  color: #383838;
  font: 15px 'Circular Air Book', sans-serif;
`;

export const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.3);
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  display: flex;
  align-items: center;
  font: 15px 'Circular Air Book', sans-serif;
`;

export const Logo = styled.img`
  margin-right: 12px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #636363;
  font: 15px 'Circular Air Book', sans-serif;
`;

export const DotInfo = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #484848;
`;

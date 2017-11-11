import styled from 'styled-components';
import search from './search.svg';

export const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
  min-height: 80px;
`;

export const Row = styled.div`
  display: flex;
  flex-basis: 100%;
  vertical-align: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const LogoSearch = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 392px;
  height: 48px;
  padding-left: 51px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  background: url(${search}) no-repeat 16px 50%;
  box-shadow: 0 1px 0 0 rgba(72, 72, 72, 0.08);
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 991px) {
    display: flex;
    justify-content: space-around;
    width: 300px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #383838;
  font-size: 14px;
`;

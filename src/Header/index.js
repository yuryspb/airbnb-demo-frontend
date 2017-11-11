import React from 'react';
import { Header, Row, LogoSearch, Input, Nav, Link } from './styled';
import logo from './airbnbLogo.svg';

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <Row>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-12">
              <LogoSearch>
                <div className="col-xs-2 col-sm-1 col-md-1 col-lg-1">
                  <img src={logo} alt="logo" />
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-12">
                  <Input type="text" placeholder="Try &quot;Miami&quot;" />
                </div>
              </LogoSearch>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4">
              <Nav>
                <Link href="#">Become a host</Link>
                <Link href="#">Help</Link>
                <Link href="#">Sign Up</Link>
                <Link href="#">Log In</Link>
              </Nav>
            </div>
          </Row>
        </div>
      </div>
    </Header>
  );
}

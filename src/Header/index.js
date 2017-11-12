import React from "react";
import { Header, Row, LogoSearch, Input, Nav, Link } from "./styled";
import logo from "./airbnbLogo.svg";

export default function() {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <Row>
            <div className="col-xs-8 col-12">
              <LogoSearch>
                <img src={logo} alt="logo" />

                <Input type="text" placeholder="Try &quot;Miami&quot;" />
              </LogoSearch>
            </div>

            <div className="col-xs-4">
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

import React from "react";
import { Header, Row, LogoSearch, Input, Nav, Links } from "./styled";
import logo from "./airbnbLogo.svg";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <Row>
            <div className="col-xs-10 col-lg-5">
              <LogoSearch>
                <Link to="../">
                  <img src={logo} alt="logo" />
                </Link>

                <Input
                  type="text"
                  placeholder="Try &quot;Miami&quot;"
                  value={props.value}
                />
              </LogoSearch>
            </div>

            <div className="col-xs-4">
              <Nav>
                <Links href="#">Become a host</Links>
                <Links href="#">Help</Links>
                <Links href="#">Sign Up</Links>
                <Links href="#">Log In</Links>
              </Nav>
            </div>
          </Row>
        </div>
      </div>
    </Header>
  );
}

import React from 'react';
import {
  Footer,
  FirstRow,
  LastRow,
  Select,
  NavContainer,
  Nav,
  NavTitle,
  Link,
  Copyright,
  Logo,
  Info,
  SocialLink,
  DotInfo
} from './styled';
import logo from './airbnbLogo.svg';
import iconFacebook from './facebook.svg';
import iconTwitter from './twitter.svg';

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <FirstRow>
            <div className="col-3">
              <Select name="language" id="languageSelect">
                <option value="first">English</option>
              </Select>
              <Select name="currency" id="currencySelect">
                <option value="first">United States dollar</option>
              </Select>
            </div>

            <div className="col-8">
              <NavContainer>
                <Nav>
                  <NavTitle>Airbnb</NavTitle>
                  <Link href="#">About us</Link>
                  <Link href="#">Careers</Link>
                  <Link href="#">Press</Link>
                  <Link href="#">Policies</Link>
                  <Link href="#">Help</Link>
                  <Link href="#">Diversity & Belonging</Link>
                </Nav>
                <Nav>
                  <NavTitle>Discover</NavTitle>
                  <Link href="#">Trust & Safety</Link>
                  <Link href="#">Travel Credit</Link>
                  <Link href="#">Gift Cards</Link>
                  <Link href="#">Airbnb Citizen</Link>
                  <Link href="#">Bisiness Travel</Link>
                  <Link href="#">Guidebooks</Link>
                  <Link href="#">Airbnbmag</Link>
                </Nav>
                <Nav>
                  <NavTitle>Hosting</NavTitle>
                  <Link href="#">Why Host</Link>
                  <Link href="#">Hospitality</Link>
                  <Link href="#">Responsible Hosting</Link>
                  <Link href="#">Community Center</Link>
                </Nav>
              </NavContainer>
            </div>
          </FirstRow>
        </div>
        <div className="row">
          <div className="col-12">
            <LastRow>
              <div className="col-2">
                <Copyright>
                  <Logo src={logo} /> © Airbnb Inc.
                </Copyright>
              </div>
              <div className="col-4">
                <Info>
                  <SocialLink href="#" className="SocialLinks">
                    Terms
                  </SocialLink>
                  <SocialLink href="#" className="SocialLinks">
                    Privacy
                  </SocialLink>
                  <SocialLink href="#" className="SocialLinks">
                    Site map
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={iconFacebook} alt="facebook" />
                  </SocialLink>
                  <SocialLink href="#">
                    <img src={iconTwitter} alt="twitter" />
                  </SocialLink>
                  <DotInfo />
                </Info>
              </div>
            </LastRow>
          </div>
        </div>
      </div>
    </Footer>
  );
}

import React from "react";
import "./Footer.scss";
import visaLogo from "../../assets/visa-logo.png";
import mastercardLogo from "../../assets/mastercard-logo.png";
import maestroLogo from "../../assets/maestro-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4 className="footer__column-title">Lorem</h4>
          <p className="footer__column-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet.
          </p>
          <div className="footer__payment-systems">
            <img
              className="footer__payment-system"
              src={visaLogo}
              alt="visa logo"
            />
            <img
              className="footer__payment-system"
              src={mastercardLogo}
              alt="mastercard logo"
            />
            <img
              className="footer__payment-system"
              src={maestroLogo}
              alt="maestro logo"
            />
          </div>
        </div>

        <div className="footer__column">
          <h4 className="footer__column-title">Lorem Ipsum</h4>
          <p className="footer__column-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut
            enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut
            ornare lectus sit. Quam elementum pulvinar etiam non.
          </p>
        </div>

        <div className="footer__column">
          <h4 className="footer__column-title">Contacts</h4>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <h5 className="footer__contact-city">London</h5>
              <p className="footer__contact-address">
                26985 Brighton Lane, Lake Forest, CA 92630
              </p>
              <p className="footer__contact-phone">+1 (949) 354-2574</p>
            </li>
            <li className="footer__contact">
              <h5 className="footer__contact-city">Paris</h5>
              <p className="footer__contact-address">9 Doe Crossing Court</p>
              <p className="footer__contact-phone">+11 281-762-2687</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p className="footer__bottom-text">2022-2023 All rights reserved</p>
          <p className="footer__bottom-text">Site is developed by ME</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import {Link as ScrollTo} from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-link-container">
        <div>
          <ScrollTo to="home" spy={true} smooth={true} duration={500} className="footer-link-text">Back to Top</ScrollTo>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

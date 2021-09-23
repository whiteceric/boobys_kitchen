import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="Footer">
      <div className="footer-link-container">
        <div onClick={scrollToTop}>
          <small className="footer-link-text">Back to Top</small>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;

import React from 'react';
import { Link as ScrollTo} from "react-scroll";
import PropTypes from 'prop-types';
import './Home.css'

const Home = () => (
  <div className="Home">
    <div className="logo"></div>
    <div className="logoTextContainer">
      <h1 className="logoText">Booby's Kitchen</h1>
    </div>
    <div className="linkRow">
      <ScrollTo to="about" spy={true} smooth={true} className="linkButton">About</ScrollTo>
      <ScrollTo to="book" spy={true} smooth={true} className="linkButton">Book</ScrollTo>
      <ScrollTo to="contact" spy={true} smooth={true} className="linkButton">Contact</ScrollTo>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

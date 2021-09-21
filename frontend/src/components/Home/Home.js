import React from 'react';
import { Link as ScrollTo } from "react-scroll";
import PropTypes from 'prop-types';
import useWindowDimensions from '../useWindowDimensions';
import logo from "../../images/logo.png"
import './Home.css'

const Home = () => {
  const { height, width } = useWindowDimensions();
  console.log(width)

  return (
    <div className="Home">
      <div className="homeContents">
        {(width > 1060) ? (
          <>
            <img src={logo} alt='' className="logo"></img>
            <h1 className="logoText">Booby's Kitchen</h1>
          </>
        ) : (
          <>
            <h1 className="logoText">Booby's Kitchen</h1>
            <img src={logo} alt='' className="logo"></img>
          </>
        )}
        <div className="linkRow">
          <ScrollTo to="about" spy={true} smooth={true} className="linkButton">About</ScrollTo>
          <ScrollTo to="book" spy={true} smooth={true} className="linkButton">Book</ScrollTo>
          <ScrollTo to="contact" spy={true} smooth={true} className="linkButton">Contact</ScrollTo>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

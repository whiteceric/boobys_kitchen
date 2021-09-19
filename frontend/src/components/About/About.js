import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = () => (
  <div id="about" className="About">
    <div className="about-container">
      <div className="about-left">
        <h1 className="about-title">About Us</h1>
      </div>
      <p className="about-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Elementum integer enim neque volutpat ac tincidunt vitae.
      </p>
    </div>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;

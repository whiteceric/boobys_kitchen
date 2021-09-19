import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.Home}>
    <div className={styles.logo}></div>
    <div className={styles.logoTextContainer}>
      <h1 className={styles.logoText}>Booby's Kitchen</h1>
    </div>
    <div className={styles.linkRow}>
      <button className={styles.linkButton}>About</button>
      <button className={styles.linkButton}>Book</button>
      <button className={styles.linkButton}>Contact</button>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;

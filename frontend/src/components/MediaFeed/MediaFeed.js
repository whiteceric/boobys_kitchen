import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MediaFeed.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images/social_media', false, /\.(png|jpe?g|svg)$/));

const MediaFeed = () => {
  const [imgIndex, setImgIndex] = useState(0)
  console.log(imgIndex)

  useEffect(() => {
    setInterval(() => {
      let i = imgIndex + 1;
      i = i % Object.keys(images).length;
      setImgIndex(i);
    }, 3000);
  })

  const changeImg = () => {
    
  }

  return (
    <div className="MediaFeed">
      <img src={Object.entries(images)[imgIndex][1].default} alt='' />
    </div>
  );
}

MediaFeed.propTypes = {};

MediaFeed.defaultProps = {};

export default MediaFeed;

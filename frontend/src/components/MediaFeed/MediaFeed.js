import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import './MediaFeed.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const delay = 2500;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const imagesObj = importAll(require.context('../../images/social_media', false, /\.(png|jpe?g|svg)$/));
const images = [];
for (let [k, v] of Object.entries(imagesObj)) {
  images.push(v.default);
}

const MediaFeed = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setImgIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [imgIndex]);

  return (
    <div className="MediaFeed">
      <a href="https://www.facebook.com/Boobys-Kitchen-229259131754242" target="_blank" rel="noopener noreferrer">
        <h1 className="mediaTitle">Check Us Out!</h1>
        <div className="slideShowContainer">
          <Carousel
            className="feedContainer"
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
          >
            {images.map((img, index) => {
              return (
                <img className="mediaImage" src={img} alt='' key={index} />
              )
            })}
          </Carousel>
        </div>
      </a>
    </div>
  );
}

MediaFeed.propTypes = {};

MediaFeed.defaultProps = {};

export default MediaFeed;

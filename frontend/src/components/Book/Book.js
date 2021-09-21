import React from 'react';
import BookForm from '../BookForm/BookForm';
import MediaFeed from '../MediaFeed/MediaFeed';
import useWindowDimensions from '../useWindowDimensions';
import PropTypes from 'prop-types';
import './Book.css';

const Book = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div id="book" className="Book">
      <BookForm />
      {(width > 1060) ? (
        <MediaFeed />
      ) : (
        <></>
      )}
  </div>
  );
}

Book.propTypes = {};

Book.defaultProps = {};

export default Book;

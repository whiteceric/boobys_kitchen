import React from 'react';
import BookForm from '../BookForm/BookForm';
import MediaFeed from '../MediaFeed/MediaFeed';
import PropTypes from 'prop-types';
import './Book.css';

const Book = () => (
  <div id="book" className="Book">
    <BookForm />
    <MediaFeed />
  </div>
);

Book.propTypes = {};

Book.defaultProps = {};

export default Book;

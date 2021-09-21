import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './BookForm.css';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookForm = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className="BookForm">
      <h1 className="bookFormTitle">Request to Book!</h1>
      <form className="formContainer">
        <input className="bookFormTextBox" type="text" placeholder="Your Name" />
        <input className="bookFormTextBox" type="email" placeholder="Email Address" />
        <input className="bookFormTextBox" type="text" placeholder="Event Name" />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </form>
    </div>
  )
}

BookForm.propTypes = {};

BookForm.defaultProps = {};

export default BookForm;

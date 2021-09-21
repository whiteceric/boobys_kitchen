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
      <div className="formContainer">
        <DatePicker
          className="bookFormDatePicker"
          selected={date}
          onChange={(date) => setDate(date)}
        />
        <form onSubmit={() => { console.log('Submit') }}>
          <input className="bookFormTextBox" type="text" />
        </form>
      </div>
    </div>
  )
}

BookForm.propTypes = {};

BookForm.defaultProps = {};

export default BookForm;

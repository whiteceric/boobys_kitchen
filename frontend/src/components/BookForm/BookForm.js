import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './BookForm.css';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookForm = () => {
  const [date, setDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  return (
    <div className="BookForm">
      <h1 className="bookFormTitle">Request to Book!</h1>
      <form className="formContainer">
        <h2 className="bookFormTitle">Name:</h2>
        <input type="text" placeholder="Your Name" />
        <h2 className="bookFormTitle">Email:</h2>
        <input type="email" placeholder="Email Address" />
        <h2 className="bookFormTitle">Event:</h2>
        <input type="text" placeholder="Event Name" />
        <div className="dateRow">
          <div className="timeCol">
            <h2 className="bookFormTitle">Date:</h2>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
          <div className="timeCol">
            <h2 className="bookFormTitle">Start Time:</h2>
            <DatePicker
              selected={startTime}
              onChange={(startTime) => setStartTime(startTime)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <h2 className="bookFormTitle">End Time:</h2>
            <DatePicker
              selected={endTime}
              onChange={(endTime) => setEndTime(endTime)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>
        <h2 className="bookFormTitle">Other Info:</h2>
        <textarea />
      </form>
    </div>
  )
}

BookForm.propTypes = {};

BookForm.defaultProps = {};

export default BookForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import './BookForm.css';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const BookForm = () => {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date(0, 0, 0, 17, 0));
  const [endTime, setEndTime] = useState(new Date(0, 0, 0, 19, 0));
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    event: '',
    date: date,
    startTime: startTime,
    endTime: endTime,
    otherInfo: '',
  });

  const onFormSubmit = () => {
    console.log(formState);
  }

  return (
    <div className="BookForm">
      <h1 className="bookFormTitle">Request to Book!</h1>
      <form className="formContainer">
        <h2 className="bookFormTitle">Name:</h2>
        <input type="text" placeholder="Your Name" onChange={(e) => { setFormState({ ...formState, name: e.target.value }) }} />
        <h2 className="bookFormTitle">Email:</h2>
        <input type="email" placeholder="Email Address" onChange={(e) => { setFormState({ ...formState, email: e.target.value }) }}/>
        <h2 className="bookFormTitle">Event:</h2>
        <input type="text" placeholder="Event Name" onChange={(e) => { setFormState({ ...formState, event: e.target.value }) }}/>
        <div className="dateRow">
          <div className="dateCol">
            <h2 className="bookFormTitle">Date:</h2>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
          <div className="dateCol">
            <h2 className="bookFormTitle">Start Time:</h2>
            <DatePicker
              selected={startTime}
              onChange={(startTime) => setStartTime(startTime)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Start Time"
              dateFormat="h:mm aa"
              popperPlacement="bottom"
            />
            <h2 className="bookFormTitle">End Time:</h2>
            <DatePicker
              selected={endTime}
              onChange={(endTime) => setEndTime(endTime)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="End Time"
              dateFormat="h:mm aa"
              popperPlacement="bottom"
            />
          </div>
        </div>
        <h2 className="bookFormTitle">Other Info:</h2>
        <textarea onChange={(e) => { setFormState({ ...formState, otherInfo: e.target.value }) }}/>
        <button type="submit" onClick={(e) => { e.preventDefault(); onFormSubmit() }}>Submit</button>
      </form>
    </div>
  )
}

BookForm.propTypes = {};

BookForm.defaultProps = {};

export default BookForm;

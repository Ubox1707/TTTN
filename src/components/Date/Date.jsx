import React , { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './date.css'

const Date = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
    setSelectedDate(date);
  };
 
  return (
    <div>
      <DatePicker
        id="dob"
        name="dob"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Ngày sinh"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className='date-picker'
      />
    </div>
  )
}

export default Date

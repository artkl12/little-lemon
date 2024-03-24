import React, {useState} from 'react';
import Datetime from "react-datetime";


function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (momentObj) => {
    setSelectedDate(momentObj);
  }
  return (
    <div>
      <h2>Date and Time Picker</h2>
      <Datetime
        value={selectedDate} // Set the selected date and time
        onChange={handleDateChange} // Callback function to handle changes
        inputProps={{ placeholder: 'Select date and time' }} // Optional placeholder
      />
      {selectedDate && (
        <p>Selected date and time: {selectedDate.format('YYYY-MM-DD HH:mm:ss')}</p>
      )}
    </div>
  )
}

export default DateTimePicker
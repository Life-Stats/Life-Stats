import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

export default function Main() {
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <DatePicker
        value={selectedBirthDate}
        onChange={setSelectedBirthDate}
        inputPlaceholder="Select your birthdate"
      />
    </form>
  );
}

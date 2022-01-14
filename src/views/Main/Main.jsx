import React from 'react';
import '../../../node_modules/react-modern-calendar-datepicker';
import DatePicker from 'react-modern-calendar-datepicker';
import { useState } from 'react';

export default function Main() {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input id="name" value={name} onChange={(name) => setName(name)}></input>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </form>
  );
}

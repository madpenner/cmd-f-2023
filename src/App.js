import logo from './logo.svg';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  //The initial value passed to the calendar is the present date.

  return (
    <div className='app'>
      <h1 className='text-center'>What's your mood today?</h1>
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate} 
          value={date} 
          //maxDate={new date()}
          //minDate={new Date(2023, 1, 1)}
        />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default App;
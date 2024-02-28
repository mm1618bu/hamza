import React from 'react';
import SchedulingTable from './SchedulingTable'; // Assuming BookingChart.js is in the same directory

const App = () => {
  // Define your bookings data here
  const bookings = [BookingChart
    // Your booking objects go here
    // Example: { machine: 'Machine A', startTime: '8:00 AM', endTime: '9:00 AM', bookedBy: 'John Doe' },
  ];

  return (
    <div className="App">
      <h1>Equipment Booking Chart</h1>
      <SchedulingTable bookings={bookings} />
    </div>
  );
};

export default App;
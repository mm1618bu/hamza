import React, { useState } from 'react';
import RentalChart from './RentalChart';
import AddAppointmentForm from './AddAppointmentForm';

function App() {
  const [appointments, setAppointments] = useState([]);

  // Function to add an appointment to the state
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div className="container mt-5">
      <h1>Equipment Rental Tracker</h1>
      <AddAppointmentForm addAppointment={addAppointment} />
      <RentalChart appointments={appointments} />
    </div>
  );
}

export default App;

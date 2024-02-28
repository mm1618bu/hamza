import React, { useState } from 'react';

const AddAppointmentForm = ({ addAppointment }) => {
  const [machine, setMachine] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate and format the input data

    // Add the appointment to the state
    addAppointment({ machine, startTime, endTime });

    // Clear the form fields
    setMachine('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="machine">Machine Name:</label>
        <input
          type="text"
          id="machine"
          value={machine}
          onChange={(e) => setMachine(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="text"
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="endTime">End Time:</label>
        <input
          type="text"
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Appointment
      </button>
    </form>
  );
};

export default AddAppointmentForm;

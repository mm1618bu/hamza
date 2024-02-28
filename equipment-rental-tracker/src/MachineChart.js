import React from 'react';
import './MachineChart.css';
import machineNames from './MachineNames';

const MachineChart = ({ rentals }) => {
  const machineNamesList = machineNames.map((machine) => machine.machine);

  const generateTimeSlots = () => {
    const timeSlots = [];
    let currentTime = new Date('2023-09-05T08:00:00');

    while (currentTime <= new Date('2023-09-05T22:00:00')) {
      timeSlots.push(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      currentTime.setHours(currentTime.getHours() + 1);
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots();
  let timeSlot = null;

  const getRentalForTimeSlot = (timeSlot, machineName) => {
    return rentals.find(
      (rental) =>
        rental.machine === machineName &&
        timeSlot >= new Date(rental.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) &&
        timeSlot <
          new Date(new Date(rental.time).setHours(new Date(rental.time).getHours() + rental.duration)).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
    );
  };

  const handleAddAppointment = () => {
    const newAppointment = {
      machine: prompt('Enter machine name (Machine A to Machine F):'),
      time: prompt('Enter start time (HH:MM):'),
      duration: parseFloat(prompt('Enter duration (hours):')),
    };

    if (newAppointment.machine && machineNamesList.includes(newAppointment.machine) && newAppointment.time && newAppointment.duration) {
      const existingRentalIndex = rentals.findIndex((rental) => rental.machine === newAppointment.machine);

      if (existingRentalIndex !== -1) {
        rentals[existingRentalIndex] = newAppointment;
      } else {
        rentals.push(newAppointment);
      }
    } else {
      alert('Invalid input or machine name. Please try again.');
    }

    timeSlot = newAppointment.time;
  };

  console.log('Machine Names List:', timeSlots, timeSlot);

  return (
    <div className="chart-container">
      <table bordered className="equipment-chart">
        <thead>
          <tr>
            <th>Time</th>
            {machineNamesList.map((machineName) => (
              <th key={machineName}>{machineName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot) => (
            <tr key={timeSlot}>
              <td>{timeSlot}</td>
              {machineNamesList.map((machineName) => (
                <td key={machineName}>
                  {getRentalForTimeSlot(timeSlot, machineName) && (
                    <div className="appointment-block">
                      {getRentalForTimeSlot(timeSlot, machineName).machine}
                      <p>{getRentalForTimeSlot(timeSlot, machineName).time}</p>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddAppointment}>Add Appointment</button>
    </div>
  );
};

export default MachineChart;

import React, { useState } from 'react';
import './MachineChart.css';
import MachineChart from './MachineChart';
import machineNames from './MachineNames';

function App() {
  const [rentals, setRentals] = useState([]);

  const addAppointment = (newAppointment) => {
    setRentals((prevRentals) => [...prevRentals, newAppointment]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Equipment Rental Tracker</h1>
      </header>
      <main>
        <MachineChart rentals={rentals} addAppointment={addAppointment} machineNames={machineNames} />
      </main>
    </div>
  );
}

export default App;

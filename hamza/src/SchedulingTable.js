import React from "react";

import { Bar } from 'react-chartjs-2';

const SchedulingTable = ({ bookings }) => {
  // Define your machine names and time intervals
  const machines = ['Machine A', 'Machine B', 'Machine C', 'Machine D', 'Machine E', 'Machine F'];
  const timeIntervals = Array.from({ length: 15 }, (_, i) => `${i + 8}:00 AM`);

  // Create a data structure to represent bookings
  const bookingData = machines.map((machine, machineIndex) => {
    return {
      label: machine,
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Change the color as needed
      data: timeIntervals.map((time, timeIndex) => {
        const booking = bookings.find(
          (booking) =>
            booking.machine === machine &&
            booking.startTime === timeIntervals[timeIndex] &&
            booking.endTime === timeIntervals[timeIndex + 1]
        );
        return booking ? booking.bookedBy : null;
      }),
    };
  });

  // Create the chart configuration
  const chartData = {
    labels: timeIntervals.slice(0, -1), // Exclude the last interval
    datasets: bookingData,
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Machine Names',
        },
      },
    },
  };

  return (
    <div className="booking-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};



export default SchedulingTable;

// ClassBox.js

import React from 'react';

const ClassBox = ({ className, startTime, endTime }) => {
  // Calculate positioning and styling based on startTime and endTime
  const boxStyle = {
    // Set the styles based on start and end times
    // For example: height, width, background color, etc.
  };

  return (
    <div className={`class-box ${className}`} style={boxStyle}>
      <p>{className}</p>
      <p>{startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
};

export default ClassBox;

import React, { useRef, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import './index.css';

const MyCalendar = () => {
  const calendarEl = useRef(null);
  const [currentView, setCurrentView] = useState('timeGridWeek'); // Default view is timeGridWeek

  useEffect(() => {
    if (calendarEl.current) {
      const calendarApi = calendarEl.current.getApi();
      calendarApi.changeView(currentView); // Change the view based on the currentView state
    }
  }, [currentView]);

  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      <div className="top-menu">
        <ul>
          <li>{formattedDate}</li>
          <li>John Adam Shelby</li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0002 18.3996C10.9733 18.3996 11.7695 17.6427 11.7695 16.7177H8.23096C8.23096 17.1637 8.41736 17.5915 8.74916 17.907C9.08096 18.2224 9.53098 18.3996 10.0002 18.3996Z" fill="#64938F"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2441 5.99809C15.7195 6.68532 14.8917 7.12874 13.9604 7.12874C12.3746 7.12874 11.0891 5.84322 11.0891 4.25745C11.0891 3.3557 11.5048 2.55105 12.155 2.02465C11.4676 1.78979 10.74 1.66669 9.99984 1.66669C8.23173 1.66669 6.53603 2.36907 5.28579 3.61931C4.03555 4.86955 3.33317 6.56524 3.33317 8.33335V14.1667H1.6665V15.8334H18.3332V14.1667H16.6665V8.33335C16.6665 7.52817 16.5208 6.73801 16.2441 5.99809Z" fill="#437874"/>
            <circle cx="13.9604" cy="4.25742" r="2.57426" fill="#D25C54"/>
          </svg>
          </li>
        </ul>
      </div>
      <div className="calendar-container">
        <div className="menu-bar">
          <h2>Menu</h2>
          <ul>
            <li>Date</li>
            <li>Name</li>
            <li>Bell</li>
          </ul>
          <h2>Menu</h2>
          <ul>
            <li>Date</li>
            <li>Name</li>
            <li>Bell</li>
          </ul>
        </div>
        <div className="calendar">
          <div className="title">Your Schedule</div>
          <div className="navbar">
            <h2> + Reservation</h2>
            <input type="text" placeholder="Search..." />
          </div>
          <FullCalendar
            plugins={[timeGridPlugin, dayGridPlugin]}
            headerToolbar={{
              left: 'today,prev,next',
              center: 'title',
              right: 'timeGridDay,timeGridWeek,dayGridMonth'
            }}
            initialView={currentView} // Set the initial view based on the currentView state
            events={[
              // Your event data here...
            ]}
            ref={calendarEl}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;

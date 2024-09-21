// CalendarComponent.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('http://localhost:5678/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <Calendar />
            <h2>Upcoming Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <strong>{event.summary}</strong> - {new Date(event.start.dateTime || event.start.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarComponent;

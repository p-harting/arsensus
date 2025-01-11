"use client";

import React, { useEffect, useState } from 'react'

type Event = {
    id: string;
    name: string;
    description: string;
    durationInMinutes: number;
    isActive: boolean;
}

const Booking = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch('/api/events')
            .then((response) => response.json())
            .then((data: Event[]) => setEvents(data))
            .catch((error) => console.error('Error fetching timezones:', error));
    }, []);

    return (
        <div>
            <form className='flex flex-col'>
                <label>Events</label>
                <select>
                    {events.map((event) => (
                        <option key={event.id} value={event.name}>
                            {event.name}
                        </option>
                    ))}
                </select>
                <label>Datum</label>
                <input></input>
                <label>Zeit</label>
                <select>

                </select>
                <label>Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Anmerkung</label>
                <input></input>
                <button>Buchen</button>
            </form>
        </div>
    )
}

export default Booking
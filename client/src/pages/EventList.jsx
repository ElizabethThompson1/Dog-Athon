import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeftCategories from '../components/events/LeftCategories';
import Event from '../components/events/Event';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3309/events/');
        setEvents(response.data);
        setFilteredEvents(response.data); // Initially set filteredEvents to all events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleFilter = (selectedDistance, selectedMonths) => {
    // Filter events based on selected distance and months
    const filtered = events.filter(event => {
      return (
        selectedDistance.includes(event.distance) &&
        selectedMonths.includes(event.month)
      );
    });
    setFilteredEvents(filtered);
  };

  return (
    <div>
      {/* Banner */}
      <div className="bg-custom-blue text-white py-20 px-8 text-center">
        <h1 className="text-3xl font-semibold">Events</h1>
        <p className="text-lg">Find and explore upcoming events</p>
      </div>

      {/* Main content */}
      <div className="flex">
        
        <div className="w-1/4">
          <LeftCategories onFilter={handleFilter} />
        </div>

        {/* Right side event list */}
        <div className="w-3/4 px-4">
          {filteredEvents.length > 0 ? (
            <div className="flex flex-wrap justify-between mt-4">
              {filteredEvents.map((event, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4">
                  <Event
                    title={event.title}
                    date={`${event.month} ${event.day}, ${event.year}`}
                    location={event.address}
                    description={event.description}
                    img={event.image}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg mt-8 text-center">No events found for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;

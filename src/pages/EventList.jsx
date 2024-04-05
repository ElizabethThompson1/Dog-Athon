import React, { useState } from 'react';
import LeftCategories from '../components/events/LeftCategories';
import EventCarousel from '../components/events/EventCarousel';


const EventList = () => {
  

  return (
    <div className="event-container flex">
      <div className="left-categories-container pl-4 pr-12 w-1/4 mt-32"> 
        <LeftCategories  />
      </div>
      <div className="event-list">
          <EventCarousel/> 
      </div>
    </div>
  );
};

export default EventList;

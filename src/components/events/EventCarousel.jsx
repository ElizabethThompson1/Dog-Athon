import React, { useState } from 'react';
import eventsData from "./evnetDetails.json"
import Event from './Event';
import Carousel from '@brainhubeu/react-carousel';


import '@brainhubeu/react-carousel/lib/style.css';

const EventCarousel = () => {
    // const [startIndex, setStartIndex] = useState(0);

    // const handlePrevious = () => {
    //     if (startIndex > 0) {
    //         setStartIndex(startIndex - 4);
    //     }
    // };

    // const handleNext = () => {
    //     if (startIndex + 7 < eventsData.length) {
    //         setStartIndex(startIndex + 4);
    //     }
    // };

    return (
        <div style={{ marginTop: "200px" }}>
                {eventsData.map((event, index) => (
                    <div key={index}>
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
    );
};

export default EventCarousel;

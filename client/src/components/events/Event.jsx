import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Event = ({ title, date, location, description, img }) => {
  return (
    <Card className="w-90 mr-14 ml-4 flex-row mb-4 bg-gray-100  shadow-md h-60 rounded-lg">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={img}
          alt="event image"
          className="h-full w-full object-cover rounded-lg"
        />
      </CardHeader>
      <CardBody className="p-4">
        <Typography variant="h6" className="text-custom-blue mb-2 uppercase font-sans">
          {title}
        </Typography>
        <Typography variant="h4" className="mb-2 font-serif">
          Date: {date}
        </Typography>
        <Typography className="mb-2 font-serif">
          Location: {location}
        </Typography>
        <Typography className="mb-4 font-normal">
          {description}
        </Typography>
        {/* Add your action button here */}
        <a href="#" className="inline-block">
          <Button variant="text" className="text-custom-cream flex items-center gap-2 font-serif">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default Event;

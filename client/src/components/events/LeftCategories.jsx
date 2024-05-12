import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { Checkbox, List, ListItem } from "@material-tailwind/react";

// Functional component for the icon used in accordion headers
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

// Main component for left categories
const LeftCategories = ({ onFilter }) => {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);
    const [showAllMonths, setShowAllMonths] = useState(false);
    const [selectedDistance, setSelectedDistance] = useState([]); // State for selected distance items
    const [selectedMonths, setSelectedMonths] = useState([]); // State for selected months

    // Toggle the state of alwaysOpen
    const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
    // Toggle the opened state of accordion
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    // Toggle the display of all months
    const handleShowMoreMonths = () => setShowAllMonths(true);
    // Toggle the display of limited months
    const handleShowLessMonths = () => setShowAllMonths(false);

    const distance = ["5k", "10K", "Half Marathon", "10 Miles"]; // List of distance options

    const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']; // List of months

    // Decide which months to display based on showAllMonths state
    const displayedMonths = showAllMonths ? months : months.slice(0, 4);

    // Function to handle distance checkbox changes
    const handleDistanceChange = (value) => {
        // Check if the selectedDistance array already includes the value (i.e., the distance option)
        if (selectedDistance.includes(value)) {
            // If the distance option is already selected, remove it from the selectedDistance array
            setSelectedDistance(selectedDistance.filter(item => item !== value));
        } else {
            // If the distance option is not selected, add it to the selectedDistance array
            setSelectedDistance([...selectedDistance, value]);
        }
        // Call the filter function with the updated filters
        onFilter(selectedDistance, selectedMonths);
    };

    // Function to handle month checkbox changes
    const handleMonthChange = (value) => {
        // Check if the selectedMonths array already includes the value (i.e., the month)
        if (selectedMonths.includes(value)) {
            // If the month is already selected, remove it from the selectedMonths array
            setSelectedMonths(selectedMonths.filter(item => item !== value));
        } else {
            // If the month is not selected, add it to the selectedMonths array
            setSelectedMonths([...selectedMonths, value]);
        }
        // Call the filter function with the updated filters
        onFilter(selectedDistance, selectedMonths);
    };

    // Function to remove a selected item from the filter list
    const removeSelectedItem = (item, list) => {
        const updatedList = list.filter(i => i !== item);
        return updatedList;
    };

    // Function to clear all selected items
    const clearAllSelectedItems = () => {
        setSelectedDistance([]);
        setSelectedMonths([]);
        // Call the filter function with empty filters to reset to all events
        onFilter([], []);
    };

    return (
        <div className="w-full max-w-md mx-auto my-8">
            {(selectedDistance.length > 0 || selectedMonths.length > 0) && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    
                    <div className="flex flex-wrap mt-2">
                        {selectedDistance.map((item, index) => (
                            <span key={index} className="px-2 py-1 bg-custom-blue text-white rounded-full mr-2 mb-2">{item} <button onClick={() => setSelectedDistance(removeSelectedItem(item, selectedDistance))}>x</button></span>
                        ))}
                        {selectedMonths.map((item, index) => (
                            <span key={index} className="px-2 py-1 bg-custom-blue text-white rounded-full mr-2 mb-2">{item} <button onClick={() => setSelectedMonths(removeSelectedItem(item, selectedMonths))}>x</button></span>
                        ))}
                    </div>
                    {/* Button to clear selected items */}
                    <button onClick={clearAllSelectedItems} className="mt-2 px-4 py-2 text-custom-blue underline">Clear All</button>
                </div>
            )}
            {/* Accordion for Distance */}
            <Accordion open={alwaysOpen}>
                <AccordionHeader onClick={handleAlwaysOpen} className="bg-custom-blue text-white p-4 cursor-pointer rounded flex items-center justify-between text-sm">
                    <span className="flex-grow">Distance</span>
                    <Icon id={1} open={open} />
                </AccordionHeader>
                <AccordionBody className="p-4">
                    <List>
                        {/* Display list of distance options */}
                        {distance.map((item, index) => (
                            <ListItem key={index} className="w-full flex items-center justify-start">
                                <Checkbox id={`checkbox-distance-${index}`} color="custom-cream" onChange={() => handleDistanceChange(item)} checked={selectedDistance.includes(item)} />
                                <label htmlFor={`checkbox-distance-${index}`} className="ml-2">{item}</label>
                            </ListItem>
                        ))}
                    </List>
                </AccordionBody>
            </Accordion>
            {/* Accordion for Months */}
            <Accordion open={open === 1} className="mt-4">
                <AccordionHeader onClick={() => handleOpen(1)} className="bg-custom-blue text-white p-4 cursor-pointer rounded flex items-center justify-between text-sm">
                    <span className="flex-grow">Months</span>
                    <Icon id={1} open={open} />
                </AccordionHeader>
                <AccordionBody className="p-4 w-full">
                    <List className="w-full">
                        {/* Display list of months */}
                        {displayedMonths.map((month, index) => (
                            <ListItem key={index} className="w-full flex items-center justify-start">
                                <Checkbox id={`checkbox-month-${index}`} color="custom-cream" onChange={() => handleMonthChange(month)} checked={selectedMonths.includes(month)} />
                                <label htmlFor={`checkbox-month-${index}`} className="ml-2">{month}</label>
                            </ListItem>
                        ))}
                    </List>
                    {/* Button to toggle display of all months */}
                    {!showAllMonths ? (
                        <button onClick={handleShowMoreMonths} className="mt-2 px-4 py-2 text-custom-blue">Show More</button>
                    ) : (
                        <button onClick={handleShowLessMonths} className="mt-2 px-4 py-2 text-custom-blue">Show Less</button>
                    )}
                </AccordionBody>
            </Accordion>
        </div>
    );
}

export default LeftCategories;

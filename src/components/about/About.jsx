import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-gray-800">
            <div className="container mx-auto py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-6/12 lg:pr-4 mb-8 lg:mb-0">
                        <img src="/about/image2.jpeg" alt="About Image" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-6/12 lg:pl-4">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold mb-6 text-custom-blue">About</h1>
                            <p className="text-lg mb-6">Our company is dedicated to organizing events that promote fitness, mindfulness, and inclusivity. We believe in the transformative power of running and its ability to enhance mental health and foster connections within communities.</p>
                            {/* <a href="#" className="inline-block bg-blue-900 text-white font-bold py-2 px-6 rounded-full">Learn More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

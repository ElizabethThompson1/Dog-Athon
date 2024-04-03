import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import runsData from "./runs.json";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Banner = () => {
    return (
        <Swiper
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
            modules={Autoplay}
            // navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {runsData.map((run) => (
                <SwiperSlide key={run.id}>
                    <div className="relative h-screen overflow-hidden">
                        <img src={run.image} alt={run.title} className="absolute inset-0 w-full h-full object-cover object-center scale-95" />
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-white text-center font-bold">
                                <h3>{run.title}</h3>
                                <p>{run.cost}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const clothesData = [
    {
        id: 1,
        name: 'Jacket',
        image: '/cartSlider/3.png',
        cost: '$50'
    },
    {
        id: 2,
        name: 'Shirt',
        image: '/cartSlider/2.png',
        cost: '$20'
    },
    {
        id: 3,
        name: 'Dog Bandana',
        image: '/cartSlider/13.png',
        cost: '$10'
    },
    {
        id: 4,
        name: 'Sweater',
        image: '/cartSlider/4.png',
        cost: '$30'
    },
    {
        id: 5,
        name: 'Hat',
        image: '/cartSlider/5.png',
        cost: '$25'
    },
    {
        id: 6,
        name: 'Jeans',
        image: '/cartSlider/6.png',
        cost: '$40'
    },
    {
        id: 7,
        name: 'Socks',
        image: '/cartSlider/7.png',
        cost: '$5'
    }
];


const CartSlider = () => {
    return (
        <div className="flex flex-col justify-between h-full py-8">
            <div className="flex flex-col items-center justify-center mb-8">
                <h2 className="text-4xl font-bold text-custom-blue mb-4">Gear Available</h2>
                <p className="text-lg text-gray-700 mb-8">Explore our collection of premium gear designed for your needs.</p>
            </div>
            <div className="flex-grow overflow-hidden">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={Navigation}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ height: 'calc(100vh - 300px)' }} // Adjust height here
                >
                    {clothesData.map(clothes => (
                        <SwiperSlide key={clothes.id}>
                            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                                <img src={clothes.image} alt={clothes.name} className="w-full h-auto" style={{ objectFit: 'cover', height: '300px' }} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-custom-blue">{clothes.name}</h3>
                                    <p className="mt-2 text-gray-700">{clothes.cost}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CartSlider;

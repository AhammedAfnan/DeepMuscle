'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import prod1 from '../../assets/home/prod4.webp';
import prod2 from '../../assets/home/prod2.webp';
import prod3 from '../../assets/home/prod3.webp';

const products = [
    {
        image: prod1,
        title: 'THE ONE GREY & WHITE FLANNEL SHIRT',
        price: 'Rs. 1,776.00',
        originalPrice: 'Rs. 3,999.00',
    },
    {
        image: prod3,
        title: 'NO FEAR OVERSIZED MAGENTA T-SHIRT',
        price: 'Rs. 1,284.00',
        originalPrice: 'Rs. 2,499.00',
    },
    {
        image: prod2,
        title: 'THE BEAST OVERSIZED BLACK T-SHIRT',
        price: 'Rs. 1,284.00',
        originalPrice: 'Rs. 2,499.00',
    },
    {
        image: prod3,
        title: 'NO FEAR OVERSIZED MAGENTA T-SHIRT',
        price: 'Rs. 1,284.00',
        originalPrice: 'Rs. 2,499.00',
    },
    {
        image: prod1,
        title: 'THE ONE GREY & WHITE FLANNEL SHIRT',
        price: 'Rs. 1,776.00',
        originalPrice: 'Rs. 3,999.00',
    },
    {
        image: prod3,
        title: 'NO FEAR OVERSIZED MAGENTA T-SHIRT',
        price: 'Rs. 1,284.00',
        originalPrice: 'Rs. 2,499.00',
    },
];

export default function CardSection() {
    return (
        <div className="py-10 bg-white">
            <h2 className="text-center text-3xl font-semibold mb-6 text-black">COLLECTIONS</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1.2}
                loop={true}
                navigation
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white">
                            <Image src={product.image} alt={product.title} className="w-full h-[450px]" />
                            <div className="p-4 text-center space-y-2">
                                <p className="text-xs text-gray-500">{product.title}</p>
                                <div className="text-sm font-bold text-black">
                                    {product.price}
                                    <span className="line-through text-gray-400 ml-2">
                                        {product.originalPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

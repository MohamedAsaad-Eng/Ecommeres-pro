'use client'
import React from 'react'
import {Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Category } from '@/interfaces/cart.interface';

export default function CategorySwiper({ data }: { data: Category[] }) {
  return (
    <>
      <div className='w-[100%] mx-auto'>
        <h1 className='text-slate-500 font-semibold my-2'>Shop Popular Categories</h1>
        <Swiper
               spaceBetween={10}
               slidesPerView={7}
               modules={[Autoplay]}
               autoplay={{delay: 2000}}
               breakpoints={{
                 320: {
                   slidesPerView: 4,
                   spaceBetween: 10,
                 },
                 640: {
                   slidesPerView: 3,
                   spaceBetween: 15,
                 },
                 768: {
                   slidesPerView: 4,
                   spaceBetween: 20,
                 },
                 1024: {
                   slidesPerView: 6,
                   spaceBetween: 20,
                 },
                 1280: {
                   slidesPerView: 7,
                   spaceBetween: 20,
                 },
               }}
          >
            {data.map((category) => (
                <SwiperSlide key={category._id}>
                  <div className='flex flex-col items-center'>
                    <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden mb-2'>
                      <Image 
                        width={120} 
                        height={120}  
                        src={category.image} 
                        alt={category.name || 'Category image'} 
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <p className='text-center font-bold text-xs sm:text-sm'>{category.name}</p>
                  </div>
                 </SwiperSlide>
            ))}                                       
        </Swiper>
      </div>
    </>
  )
}
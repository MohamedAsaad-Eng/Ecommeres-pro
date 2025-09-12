'use client'
import React from 'react'
import {Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Category } from '@/interfaces/cart.interface';

export default function CategorySwiper({ data }: { data: Category[] }) {
  return ( <>
  <div className='w-[100%] mx-auto'>
    <h1 className='text-slate-500 font-semibold my-2'>Shop Popular Categories</h1>
    <Swiper
               spaceBetween={0}
               slidesPerView={7}
               modules={[Autoplay]}
               autoplay={{delay : 2000}}

         >
            {data.map((category) => (
                <SwiperSlide key={category._id}>
                    <Image src={category.image} alt='test' className='w-full h-[150px] object-cover'/>
                    <p className='text-center font-bold'>{category.name}</p>
                 </SwiperSlide>
            ))}
                 
                
    </Swiper>
  </div>
    </>
  )
}

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider1 from '../../assets/images/slider-image-1.jpeg';
import slider2 from '../../assets/images/slider-image-2.jpeg';
import slider3 from '../../assets/images/slider-image-3.jpeg';
import blog1 from '../../assets/images/blog-img-1.jpeg';
import blog2 from '../../assets/images/blog-img-2.jpeg';
import Image from 'next/image';
import {Autoplay} from 'swiper/modules'

export default function MainSlider() {
  return (
    <div className='w-full lg:flex lg:flex-row'>
        <div className='w-full lg:w-3/4'>
             <Swiper
               spaceBetween={0}
               slidesPerView={1}
               modules={[Autoplay]}
               autoplay={{delay: 2000}}
          >
                 <SwiperSlide>
                    <Image 
                      src={slider1} 
                      alt='Main slider image 1' 
                      className='w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover'
                    />
                 </SwiperSlide>
                 <SwiperSlide>
                        <Image 
                          src={slider2} 
                          alt='Main slider image 2' 
                          className='w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover'
                        />
                 </SwiperSlide>
                  <SwiperSlide>
                         <Image 
                           src={slider3} 
                           alt='Main slider image 3' 
                           className='w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover'
                         />
                 </SwiperSlide>
    </Swiper>
        </div>

        <div className='hidden lg:flex lg:w-1/4 lg:flex-col'>
          <div className='w-full'>
            <Image 
              src={blog1} 
              alt='Blog image 1' 
              className='w-full h-[200px] object-cover'
            />
          </div>
          <div className='w-full'>
            <Image 
              src={blog2} 
              alt='Blog image 2' 
              className='w-full h-[200px] object-cover'
            />
          </div>
        </div>
    </div>
  )
}
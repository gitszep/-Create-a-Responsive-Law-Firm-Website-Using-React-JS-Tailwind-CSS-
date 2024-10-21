import React from 'react';

import { testimonials } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../testimonialSlider.css';

import { Autoplay, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Poprawne użycie autoplay
        modules={[Autoplay, Pagination]}
      >
        {testimonials.map((item, index) => {
          const { text, name, image, position } = item;
          return (
            <SwiperSlide key={index}>
              <div className='relative lg:mt-[34px] before:content-quote p-8'>
                <div>
                  <p>{text}</p>
                  <div className='flex items-center mt-[18px] mb-8'>
                    <img src={image} alt={name} className='w-12 h-12 rounded-full' />
                    <div className='ml-4'>
                      <h6 className='font-bold'>{name}</h6>
                      <p className='text-sm'>{position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;

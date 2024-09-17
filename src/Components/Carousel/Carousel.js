import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Carousel({allCountries}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            allCountries.map((country, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img className='w-full h-[400px]' src={country.flag} alt={country.name} width={"100%"} height={400} />
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}

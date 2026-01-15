"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const nicknames = ["My lovely Dori", "My Cutie Koala", "My Umumumu", "My Everything", "My Happily Ever After"]

export default function NicknameCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="font-semibold"
      >
        {nicknames.map((nickname, index) => (
        <SwiperSlide key={index}>{nickname}!!</SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

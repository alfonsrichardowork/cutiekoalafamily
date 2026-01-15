"use client"

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Parallax, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { Heart, MoveRight } from 'lucide-react';
import { useRef, useState } from 'react';

type PropType = {
  slides: {url: string, desc: string}[];
};

const SwiperCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [realIndex, setRealIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div className="relative">
      <Swiper
        speed={600}
        parallax={true}
        autoplay={{
            delay: 7000,
            disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          const indexAttr = swiper.slides[swiper.activeIndex]?.getAttribute('data-swiper-slide-index');
          const real = indexAttr ? parseInt(indexAttr) : 0;
          setRealIndex(real);
        }}
        modules={[Autoplay, Navigation, Parallax]}
        className="swiper bg-foreground"
      >
        {slides && slides.length > 0 && slides.map((item: any, indexParent) => (
          <SwiperSlide key={indexParent}>
            <div className="absolute h-[80vh] bottom-0 parallax-bg">
              <img
                className="w-screen h-full object-cover object-bottom"
                src={item.url}
                alt={`${item.url} - ${indexParent}`}
                width={1920}
                height={1024}
              />  
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" 
                style={{
                  backgroundPosition: '0 70%',
                  backgroundSize: '100% 200%'
                }}>
            </div>
            </div>
          <div className="container mx-auto flex flex-col md:flex-row items-end md:items-center xl:px-24 lg:px-16 px-10 pb-16 pt-6 h-[80vh]">

          <div className="order-2 md:order-1 flex flex-col items-start text-left gap-2 w-full z-50 h-full justify-end">

                <h3 className="text-xl md:text-4xl font-semibold text-background" data-swiper-parallax="-250">
                  {item.desc} 
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-3">
        {slides.map((_, index) => (
          <Heart 
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`transition-all duration-300 ${
              realIndex === index ? 'text-pink-500 fill-pink-500 scale-125' : 'fill-background text-background'
            } hover:cursor-pointer hover:scale-125`}
            size={20}
          />
          // <button
          //   key={index}
          //   onClick={() => swiperRef.current?.slideToLoop(index)}
          //   className={`w-12 h-2 rounded-none transition-all duration-300 ${
          //     realIndex === index ? 'bg-primary scale-125' : 'bg-background'
          //   }`}
          // ></button>
        ))}
      </div>
    </div>
  );
};


export default SwiperCarousel;

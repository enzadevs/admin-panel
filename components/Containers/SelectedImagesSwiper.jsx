"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "styles/swiper.css";

export default function ProductsSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full z-0">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-[4px] h-96 w-full"
      >
        {images.map((file, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={URL.createObjectURL(file)}
                alt="image of product"
                className="object-contain"
                fill
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs rounded-[4px] mt-4 h-20 md:h-32 w-full"
      >
        {images.map((file, index) => (
          <SwiperSlide key={index}>
            <button
              className="relative h-full w-full"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                src={URL.createObjectURL(file)}
                alt="thumbnail of currently selected image"
                className="border border-grey-400 rounded-[4px] object-cover"
                fill
                sizes="100vw"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

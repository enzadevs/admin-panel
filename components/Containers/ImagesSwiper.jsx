"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "styles/swiper.css";

export default function ImagesSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="hello w-full z-0">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-lg h-48 md:h-72 w-full"
      >
        {images.map((file, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={"http://localhost:5000/images/" + file}
                alt="image of product"
                className="object-contain"
                sizes="100vw"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs rounded-lg mt-4 h-16 md:h-32 w-full flex justify-between"
      >
        {images.map((file, index) => (
          <SwiperSlide key={index}>
            <button
              className="relative h-full w-full"
              onClick={(e) => e.preventDefault()}
            >
              <Image
                src={"http://localhost:5000/images/" + file}
                alt="thumbnail of currently selected image"
                className="bg-white border border-grey-200 shadow-md rounded-lg p-2 md:p-4 object-contain"
                sizes="100vw"
                fill
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

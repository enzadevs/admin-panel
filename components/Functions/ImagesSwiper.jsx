'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'styles/swiper.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay} from 'swiper/modules'

export default function ImagesSwiper({imagesArray}){
    return(
        <div className='border rounded-lg center h-72 w-full'>
            <Swiper
                navigation
                pagination={true}
                modules={[Navigation,Pagination,Autoplay]}
                className='h-full max-width'
                loop='true'
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                >
                    {imagesArray.map(item => {
                        return(
                            <div key={item.id}>
                                <SwiperSlide key={item.id}>
                                    <span className='center h-full w-full'>
                                        {item.title}
                                    </span>
                                </SwiperSlide>
                            </div>
                        )
                    })}
            </Swiper>
        </div>
    )
}
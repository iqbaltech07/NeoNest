import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cards } from '../cards/cards';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

import { Navigation } from 'swiper/modules';
import { services } from '@/data/datas';

const ServiceSwiper = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="swiper"
            initialSlide={3}
            slidesPerView={3}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 3,
                },
            }}
        >
            {services.map((service, index) => (
                <SwiperSlide key={index}>
                    <div className="flex justify-center">
                        <Cards.CardService
                            link={`/service/${service.id}`}
                            src={service.image}
                            title={service.label}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServiceSwiper;

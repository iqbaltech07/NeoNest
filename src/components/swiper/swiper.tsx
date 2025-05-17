import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cards } from '../cards/cards';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

import { Navigation, Autoplay } from 'swiper/modules';
import { services } from '@/data/datas';

const ServiceSwiper = () => {

    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
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
                            link={service.id == 3 ? `/service/${service.id}` : `https://wa.me/6285951334587?text=${encodeURIComponent(`Halo, Saya ingin order ${service.label}`)}`}
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

"use client"

import React from 'react';
import { ServiceSwiper } from '@/utils/dynamic.import';

const OurService = () => {
    return (
        <section className='mt-36 sm:mt-16' id='layanan'>
            <div className='px-8 sm:px-20'>
                <h2 className='text-[32px] sm:text-[38px] font-bold'>Layanan Kami</h2>
                <p className='text-[18px]'>Kami menyediakan beberapa layanan yang dapat anda pilih</p>
            </div>
            <div className='mt-14 sm:px-10'>
                <ServiceSwiper />
            </div>
        </section>
    )
}

export default OurService
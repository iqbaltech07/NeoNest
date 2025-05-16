"use client"

import React from 'react';
import { ServiceSwiper } from '@/utils/dynamic.import';
import SectionContainer from '@/components/layouts/SectionContainer';

const OurService = () => {
    return (
        <SectionContainer className='py-5 h-fit sm:py-20' id='layanan'>
            <div className='px-8 sm:px-20 *:text-center'>
                <h2 className='text-[32px] sm:text-[38px] font-bold'>Layanan Kami</h2>
                <p className='text-[15px] sm:text-[18px]'>Kami menyediakan beberapa layanan yang dapat anda pilih</p>
            </div>
            <div className='mt-5 sm:mt-14 py-20 sm:px-10'>
                <ServiceSwiper />
            </div>
        </SectionContainer>
    )
}

export default OurService
import SectionContainer from '@/components/layouts/SectionContainer'
import TestimonialSlider from '@/components/slider/slider'
import React from 'react'

const Testimonials = () => {
    return (
        <SectionContainer className='mt-40'>
            <div className='flex flex-col gap-1 text-center mb-20 px-8 sm:px-20'>
                <h2 className='text-[32px] sm:text-[38px] font-bold tracking-[-1.1%] leading-[135%]'>Testimoni Pelanggan</h2>
                <p className='max-w-[650px] text-[15px] sm:text-[18px] mx-auto'>Di Neonest, kami membuat segala proses terasa lebih simpel tanpa mengorbankan kualitas</p>
            </div>
            <TestimonialSlider />
        </SectionContainer>
    )
}

export default Testimonials
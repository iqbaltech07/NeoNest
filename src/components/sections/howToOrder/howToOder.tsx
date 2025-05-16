import SectionContainer from '@/components/layouts/SectionContainer'
import StepOrder from '@/components/stepOrder/stepOrder'
import React from 'react'

const HowToOrder = () => {
    return (
        <SectionContainer className='mt-48'>
            <div className='flex flex-col items-center gap-1 px-8 sm:px-20'>
                <h2 className='font-bold text-[38px] text-center leading-[135%] tracking-[-1.1%]'>Bagaimana <span className='text-[#3A6BAE]'>Cara Order?</span></h2>
                <p className='text-[15px] sm:text-[18px] max-w-[750px] text-center'>Bingung Caranya order? baca tutorial dibawah ini untuk memudahkanmu dalam melakukan order!</p>
            </div>
            <StepOrder />
        </SectionContainer>
    )
}

export default HowToOrder
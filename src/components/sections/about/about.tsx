import SectionContainer from '@/components/layouts/SectionContainer'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <SectionContainer className='h-fit sm:pt-36 pb-20 flex flex-col items-center justify-centerpx-8 px-8 sm:px-20' id='about'>
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 h-full items-center'>
                <div>
                    <Image src='/images/about.svg' alt='about-image' width={450} height={450} />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-[32px] font-bold leading-[150%] tracking-[-1.1%]'>Tentang Kami</h2>
                    <p className='max-w-[570px] text-[15px] sm:text-[20px] leading-[150%] tracking-[-1.1%]'>Neonest adalah platform terpercaya yang membantu Anda mencapai target dengan cara yang cepat, aman, dan tanpa ribet. Kami menyediakan berbagai layanan peningkatan performa di berbagai platform dengan hasil yang terjamin. Dengan keamanan sebagai prioritas utama, kami memastikan setiap langkah yang kami ambil mendukung kenyamanan Anda.</p>
                </div>
            </div>
        </SectionContainer>
    )
}

export default About
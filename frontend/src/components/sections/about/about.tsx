import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='px-4 sm:px-20' id='about'>
            <div className='flex flex-col sm:flex-row justify-center gap-10 sm:gap-20 h-screen items-center'>
                <div>
                    <Image src='/images/about.svg' alt='about-image' width={450} height={450} />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-[32px] font-bold leading-[150%] tracking-[-1.1%]'>Tentang Kami</h2>
                    <p className='max-w-[570px] text-[20px] leading-[150%] tracking-[-1.1%]'>Neonest adalah platform terpercaya yang membantu Anda mencapai target dengan cara yang cepat, aman, dan tanpa ribet. Kami menyediakan berbagai layanan peningkatan performa di berbagai platform dengan hasil yang terjamin. Dengan keamanan sebagai prioritas utama, kami memastikan setiap langkah yang kami ambil mendukung kenyamanan Anda.</p>
                </div>
            </div>
        </section>
    )
}

export default About
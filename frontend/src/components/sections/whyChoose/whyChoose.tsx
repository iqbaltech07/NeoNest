import { benefits } from '@/data/datas'
import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {
    return (
        <section className='mt-36 sm:mt-20 min-h-screen px-8 sm:px-20'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-[32px] sm:text-[38px] font-bold tracking-[-1.1%] leading-[135%] text-center'>Kenapa Memilih NeoNest</h2>
                <p className='text-[17px] max-w-[580px] text-center tracking-[-1.1%] leading-[150%]'>Di Neonest, kami membuat segala proses terasa lebih simpel tanpa mengorbankan kualitas</p>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-between mt-[70px]'>
                {benefits.map((service, index) => (
                    <div
                        className='flex flex-col gap-4 justify-center items-center flex-grow'
                        key={service.id + index}
                    >
                        <Image src={service.image} alt='icon' width={180} height={180} />
                        <h3
                            className='font-semibold text-[25px] tracking-[-1.1%] h-[40px] flex items-center justify-center text-center'
                        >
                            {service.label}
                        </h3>
                        <p
                            className='text-[17px] max-w-[290px] text-center tracking-[-1.1%] leading-[150%] h-[60px] flex items-start'
                        >
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default WhyChoose
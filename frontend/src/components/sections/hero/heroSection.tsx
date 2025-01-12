"use client"

import { Button } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='relative h-screen w-full z-10' id='home'>
            <div className='absolute top-0 left-0 h-screen w-full z-10'>
                <div className='flex items-center h-full w-full justify-between pt-5'>
                    <div className='px-8 sm:px-20'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='max-w-[500px] text-[44px] font-bold tracking-[-1.1%] leading-[119%]'>Upgrade Tanpa Batas, Solusi Mudah untuk Level Up!</h1>
                            <p className='max-w-[545px] text-[17px] font-light leading-[135%]'>Kami hadir dengan layanan terpercaya dan tenaga profesional, kami memastikan hasil maksimal tanpa mengorbankan kenyamanan dan keamanan Anda. Solusi kami dirancang khusus untuk memenuhi kebutuhan Anda, kapan saja dan di mana saja.</p>
                            <div>
                                <Button className='bg-[#3A6BAE] text-white px-10' radius='sm' onPress={(): void => window.location.replace("/#layanan")}>Layanan Kami</Button>
                            </div>
                        </div>
                    </div>
                    <div className='-translate-x-32 hidden sm:block '>
                        <Image src='/images/hero.svg' alt='ilustration-image' width={520} height={520} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
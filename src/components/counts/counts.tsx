"use client"

import { Card, CardBody } from '@nextui-org/react'
import React, { useEffect, useRef } from 'react'
import { CountUp } from 'countup.js'
import useScroll from '@/hooks/useScroll'
import { ICount } from '@/types/types'

const Counts = ({ data }: ICount) => {
    const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const { isScroll } = useScroll();

    useEffect(() => {
        if (isScroll && data) {
            data.forEach((item, index) => {
                const ref = countRefs.current[index];
                if (ref) {
                    new CountUp(ref, item.value as number, { separator: '.', suffix: index === 1 ? '%' : '+' }).start();
                }
            });
        }
    }, [isScroll, data]);

    return (
        <div className="relative z-30 h-[500px] pt-8 sm:h-10">
            <div className={`${isScroll ? "block px-8 sm:px-20 absolute sm:-top-[55px] w-full " : "hidden z-20"}`} data-aos='fade-up' data-aos-anchor-placement="center-center">
                <Card shadow='sm'>
                    <CardBody className='flex flex-col sm:flex-row justify-evenly gap-5 py-4'>
                        {data?.map((item, index) => (
                            <div className='flex flex-col items-center' key={index}>
                                <h3
                                    className='text-[40px] font-semibold'
                                    ref={(el): any => (countRefs.current[index] = el)}
                                />
                                <p className='text-center text-[16px] font-light sm:tracking-[1px]'>{item.label}</p>
                            </div>
                        ))}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Counts

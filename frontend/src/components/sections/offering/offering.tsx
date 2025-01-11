"use client"

import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const Offering = () => {
    return (
        <section className="sm:bg-[url('/images/triangle.svg')] sm:bg-right-bottom sm:bg-no-repeat h-[650px] flex items-center mt-36">
            <div className='px-8 sm:pl-20 flex flex-col gap-3'>
                <h4 className='text-[#3A6BAE] text-[50px] font-bold'>Yuk, Kepoin Instagram Kita!</h4>
                <div>
                    <Link href={"https://instagram.com/neoboost_id"}>
                        <Button className='bg-[#3A6BAE] px-8 h-12 font-semibold text-white text-[16px]' radius='sm'>Kepoin Sekarang</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Offering

'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NavigationBar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NavigationBar />
            <main className='overflow-x-hidden'>
                {children}
            </main>
            <Footer />
        </NextUIProvider>
    )
}

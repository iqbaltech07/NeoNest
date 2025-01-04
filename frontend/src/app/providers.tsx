'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import NavigationBar from '@/components/navbar/navbar'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <NavigationBar />
            <main className='px-4 sm:px-20 overflow-x-hidden'>
                {children}
            </main>
        </NextUIProvider>
    )
}
"use client"

import React from 'react'
import { Cards } from '@/components/cards/cards'
import PageContainer from '@/components/layouts/PageContainer'
import { NeoBoostService } from '@/data/dataNeoBoost'
import { webService } from '@/data/dataWebService'
import { Checkbox, CheckboxGroup } from "@nextui-org/react"
import "../../background.css"
import SectionContainer from '@/components/layouts/SectionContainer'

const dataMap: { [key: string]: any } = {
    "1": webService,
    "2": "",
    "3": NeoBoostService
}

const ServiceProduct = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = React.use(params)

    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
    const [selectedPriceSort, setSelectedPriceSort] = React.useState<string | null>(null)

    const filteredData = React.useMemo(() => {
        const productData = dataMap[id] || []

        const filteredCategories = selectedCategories.length > 0
            ? productData.filter((cat: any) =>
                selectedCategories
                    .map(s => s.toLowerCase())
                    .includes(cat.category.toLowerCase())
            )
            : productData

        const result = filteredCategories.map((cat: any) => {
            const filteredServices = [...cat.services]

            if (selectedPriceSort === "asc") {
                filteredServices.sort((a: any, b: any) => a.price - b.price)
            } else if (selectedPriceSort === "desc") {
                filteredServices.sort((a: any, b: any) => b.price - a.price)
            }

            return {
                ...cat,
                services: filteredServices
            }
        })

        return result
    }, [id, selectedCategories, selectedPriceSort])

    return (
        <PageContainer className='h-fit mb-20' withNavbar withFooter>
            <SectionContainer className='px-8 sm:px-20'>
                <div className='mb-14 sm:mt-5 sm:mb-16 text-center'>
                    <h2 className="font-bold text-2xl md:text-3xl text-zinc-800 mb-1">
                        Layanan NeoBoost
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-600">
                        Jelajahi berbagai layanan terbaik yang kami sediakan untuk Anda.
                    </p>
                </div>

                <div className='mb-10 flex flex-col sm:flex-row sm:gap-24 sm:items-center gap-8 '>
                    <div className='sm:h-[80px]'>
                        <h3 className="font-semibold text-md sm:text-lg mb-2">Filter Kategori</h3>
                        <CheckboxGroup
                            value={selectedCategories}
                            onValueChange={setSelectedCategories}
                            orientation="horizontal"
                            className="flex flex-wrap gap-4"
                        >
                            <Checkbox value="instagram">Instagram</Checkbox>
                            <Checkbox value="tiktok">Tiktok</Checkbox>
                        </CheckboxGroup>
                    </div>
                    <div className='sm:h-[80px]'>
                        <h3 className="font-semibold text-md sm:text-lg mb-2">Urutkan Harga</h3>
                        <CheckboxGroup
                            value={selectedPriceSort ? [selectedPriceSort] : []}
                            onValueChange={(val) => setSelectedPriceSort(val[0] || null)}
                            orientation="horizontal"
                            className="flex gap-4"
                        >
                            <Checkbox value="asc">Terendah</Checkbox>
                            <Checkbox value="desc">Tertinggi</Checkbox>
                        </CheckboxGroup>
                    </div>
                    
                </div>

                <div className='grid grid-cols-2  lg:grid-cols-4 gap-5 sm:gap-5'>
                    {filteredData.length > 0 ? (
                        filteredData.flatMap((category: any) =>
                            category.services.map((service: any) => (
                                <Cards.CardProductService
                                    key={`${category.id}-${service.id}`}
                                    category={category.category}
                                    service={service}
                                />
                            ))
                        )
                    ) : (
                        <div className="h-screen col-span-full">
                            <p className="text-center text-zinc-500">Tidak ada produk ditemukan.</p>
                        </div>
                    )}
                </div>
            </SectionContainer>
        </PageContainer>
    )
}

export default ServiceProduct

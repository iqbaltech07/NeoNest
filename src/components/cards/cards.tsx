import React from "react"
import { Card, CardHeader, CardBody, Image, CardFooter, Button, Chip, Divider } from "@nextui-org/react";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { ICardService, ICardTestimoni } from "@/types/types";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Cards = {
    CardService: ({ link, src, title }: ICardService) => {
        return (
            <div className="w-fit">
                <Card className="py-4 h-[315px] sm:h-[360px] bg-[#042152] text-white" shadow="sm">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Link href={link}>
                            <div>
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-lg w-[220px] sm:w-[272px]"
                                    src={src}
                                // width={272}
                                // height={272}
                                />
                            </div>
                        </Link>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 text-center pt-4">
                        <h4 className="font-bold text-large">{title}</h4>
                    </CardBody>
                </Card>
            </div>
        )
    },
    CardTestimoni: ({ text, src, name }: ICardTestimoni) => {
        return (
            <Card className="py-4 h-fit w-[300px] rounded-[15%]" shadow="sm">
                <CardHeader className="pb-0 pt-2 px-4 flex-col gap-3 items-center justify-center">
                    <div className="flex gap-2">
                        <IoStarSharp color="#ECE623" size={27} />
                        <IoStarSharp color="#ECE623" size={27} />
                        <IoStarSharp color="#ECE623" size={27} />
                        <IoStarSharp color="#ECE623" size={27} />
                        <IoStarSharp color="#ECE623" size={27} />
                    </div>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full"
                        src={src}
                        width={92}
                        height={92}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2 text-center pt-4">
                    <h4 className="font-bold text-large">{name}</h4>
                    <small className="font-normal text-small px-2 mt-2">{`"${text}"`}</small>
                </CardBody>
            </Card>
        )
    },
    CardProductService: (props: { category: string, service: any }) => {
        const { category, service } = props

        const renderIcon: { [key: string]: React.ReactElement } = {
            instagram: <FaInstagram className="text-lg sm:text-2xl text-zinc-800 mr-0 sm:mr-2 hidden sm:block" />,
            tiktok: <FaTiktok className="text-lg sm:text-2xl text-zinc-800 mr-0 sm:mr-2 hidden sm:block" />,
        }

        return (
            <Card className="w-full h-[280px] sm:h-[350px] border-none bg-white">
                <CardHeader className="flex flex-col items-start pb-0 pt-2 px-3 sm:pt-4 sm:px-5">
                    <div className="flex items-center w-full">
                        {renderIcon[category.toLocaleLowerCase()]}
                        <p className="text-sm sm:text-xl font-bold text-zinc-800">{category.charAt(0).toLocaleUpperCase() + category.slice(1)}</p>
                        {service.isPromo && (
                            <small className="ml-auto text-red-600 font-bold text-[11px]">PROMO</small>
                        )}
                    </div>
                </CardHeader>

                <Divider className="my-2 bg-white/20" />

                <CardBody className="py-0 px-3 sm:px-5">

                    <div className="py-1 sm:py-2">
                        <p className="text-zinc-800 text-xs sm:text-base font-semibold">{service.name}</p>
                        <div className="flex items-center mt-1">
                            <Chip size="sm" color="success" variant="flat" className="text-xs sm:text-sm">Real</Chip>
                            <Chip size="sm" className="ml-2 bg-white/10 text-zinc-800 text-xs sm:text-sm">Active</Chip>
                        </div>
                    </div>

                    <div className="bg-black/10 rounded-lg p-2 sm:p-4 mt-2 sm:mt-4">
                        <p className="text-zinc-800/80 text-xs sm:text-sm">Harga</p>
                        <p className="text-zinc-800 font-bold text-sm sm:text-xl">
                            Rp{service.price.toLocaleString('id-ID')} / {service.count >= 1000 ? `${service.count / 1000}k` : service.count}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center">
                                <div className="h-2 w-2 bg-green-400 rounded-full mr-1"></div>
                                <span className="text-zinc-800/90 text-xs">Fast Process</span>
                            </div>
                            <div className="flex items-center">
                                <div className="h-2 w-2 bg-green-400 rounded-full mr-1"></div>
                                <span className="text-zinc-800/90 text-xs">Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </CardBody>

                <CardFooter className="pt-2 px-3 sm:px-5">
                    <Button
                        className="w-full bg-zinc-800 text-white font-medium"
                        radius="sm"
                        size="sm"
                        onClick={() => {
                            const message = `Halo, Saya ingin order ${service.count >= 1000 ? `${service.count / 1000}k` : service.count} ${service.name}. Apakah bisa?`;
                            const encodedMessage = encodeURIComponent(message);
                            const url = `https://wa.me/6285951334587?text=${encodedMessage}`;
                            window.open(url, '_blank');
                        }}
                    >
                        Order Sekarang
                    </Button>
                </CardFooter>
            </Card>
        )
    }
}

export { Cards }
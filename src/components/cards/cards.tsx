import React from "react"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
interface ICardTestimoni {
    src: string;
    name: string;
    text: string;
}

interface ICardService {
    src: string;
    title: string;
    link: string;
}

const Cards = {
    CardService: ({ link, src, title }: ICardService) => {
        return (
            <div className="w-fit">
                <Card className="py-4 h-[315px] sm:h-[360px]">
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
    }
}

export { Cards }
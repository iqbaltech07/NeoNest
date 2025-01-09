import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Image from 'next/image';
import { useScroll } from '@/hooks/useScroll';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const { isScroll } = useScroll();

    const menuItems: IMenuItems[] = [
        {
            label: "Beranda",
            href: "/#home",
            isActive: true,
        },
        {
            label: "Layanan",
            href: "/#layanan",
            isActive: false,
        },
        {
            label: "Tentang",
            href: "/#about",
            isActive: false,
        }
    ];

    return (
        <Navbar
            className={`px-4 sm:px-20 sm:py-5 z-50 fixed ${!isScroll && 'bg-transparent'}`}
            position="sticky"
            isBlurred={isScroll}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Image src="/images/logo.svg" alt="NeoNest" width={180} height={180} />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item.label}-${index}`} isActive={item.isActive}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className={`text-[18px] ${item.isActive ? 'font-semibold underline underline-offset-8 decoration-2 -translate-y-1' : 'text-[#333]'} `}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className="bg-[#3A6BAE] text-white px-8 sm:px-10 rounded-full" href="#" variant="flat">
                        Masuk
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavigationBar;

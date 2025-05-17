import React, { useState, useMemo } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Button } from "@nextui-org/react";
import Image from 'next/image';
import useScroll from '@/hooks/useScroll';
import { usePathname } from 'next/navigation';
import { IMenuItems } from '@/types/types';

type TMenuItems = IMenuItems[]

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { activeSection, isScroll } = useScroll();
    const pathname = usePathname()

    const menuItems = useMemo((): TMenuItems => [
        { label: "Beranda", href: "/#home", section: "home" },
        { label: "Layanan", href: "/#layanan", section: "layanan" },
        { label: "Tentang", href: "/#about", section: "about" },
    ], []);

    return (
        <div className={`relative ${pathname == "/" ? null : "h-[105px]"} `}>
            <Navbar
                className={`px-4 sm:px-20 sm:py-5 z-50 fixed ${!isScroll && 'bg-transparent'}`}
                position="sticky"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                isBlurred={isScroll}
            >
                <NavbarContent justify='end'>
                    <NavbarBrand>
                        <Image src="/images/logo.svg" alt="NeoNest" width={180} height={180} />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${item.label}-${index}`} isActive={activeSection === item.section}>
                            <Link
                                color="foreground"
                                href={item.href}
                                className={`text-[18px] ${activeSection === item.section ? 'font-semibold underline underline-offset-8 decoration-2 -translate-y-1 text-blue-600' : 'text-[#333]'}`}
                            >
                                {item.label}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarItem className='hidden'>
                        <Button as={Link} className="bg-[#3A6BAE] text-white px-8 sm:px-10 rounded-full" href="#" variant="flat">
                            Masuk
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className='bg-white/60 backdrop-blur-md'>
                    <div className='mt-5 flex justify-center flex-col items-center gap-2'>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item.label}-${index}`}>
                                <Link
                                    className="w-full"
                                    color={activeSection === item.section ? "primary" : "foreground"}
                                    href={item.href}
                                    size="lg"
                                    onPress={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                    <NavbarMenuItem className='w-full mt-5'>
                        <NavbarItem className='block'>
                            <Button as={Link} className="bg-[#3A6BAE] text-white px-8 sm:px-10 rounded-full !w-full" href="#" variant="flat">
                                Masuk
                            </Button>
                        </NavbarItem>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </div>
    );
};

export default NavigationBar;

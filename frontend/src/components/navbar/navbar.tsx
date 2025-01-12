import React, { useState, useMemo } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";
import Image from 'next/image';
import useScroll from '@/hooks/useScroll';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { activeSection } = useScroll();

    const menuItems = useMemo(() => [
        { label: "Beranda", href: "/#home", section: "home" },
        { label: "Layanan", href: "/#layanan", section: "layanan" },
        { label: "Tentang", href: "/#about", section: "about" },
    ], []);

    return (
        <Navbar
            className={`px-4 sm:px-20 sm:py-5 z-50 fixed ${!activeSection && 'bg-transparent'}`}
            position="sticky"
            isMenuOpen={isMenuOpen}
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
                <NavbarItem>
                    {/* <Button as={Link} className="bg-[#3A6BAE] text-white px-8 sm:px-10 rounded-full" href="#" variant="flat">
                        Masuk
                    </Button> */}
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
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
            </NavbarMenu>
        </Navbar>
    );
};

export default NavigationBar;

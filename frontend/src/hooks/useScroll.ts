import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react';

export function useScroll(){
    const [isScroll, setisScroll] = React.useState<boolean>(false);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        const handleScroll = () => {
            setisScroll(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])

    return {isScroll}
}
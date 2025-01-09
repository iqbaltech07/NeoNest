"use client";

import { ScrollShadow } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Cards } from "../cards/cards";
import { testimonials } from "@/data/datas";
import { randomDuration } from "@/utils/functions";

const TestimonialSlider = () => {
    const [row, setRow] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setRow(1);
            } else {
                setRow(3);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScrollShadow
            className="flex justify-between max-w-5xl gap-[1.5rem] h-[35rem] shrink-0 mx-auto overflow-hidden"
            offset={-60}
            size={100}
            hideScrollBar
        >
            {[...new Array(row)].sort(() => Math.random() - 0.5).map((_, i) => {
                return (
                    <div className="flex flex-col overflow-hidden mx-auto" key={i}>
                        <div
                            className="max-w-none flex flex-col animate-infinite-scroll"
                            style={{
                                animationDuration: `${randomDuration(12000, 25000)}ms`,
                            }}
                        >
                            {testimonials
                                .sort(() => Math.random() - 0.5)
                                .map((testimonial, j) => (
                                    <div className="p-6" key={j}>
                                        <Cards.CardTestimoni
                                            name={testimonial.name}
                                            src={testimonial.image}
                                            text={testimonial.text}
                                        />
                                    </div>
                                ))}

                        </div>
                    </div>
                );
            })}
        </ScrollShadow>
    );
};

export default TestimonialSlider;

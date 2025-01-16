"use client";

import { ScrollShadow } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Cards } from "../cards/cards";
import { testimonials } from "@/data/datas";
import { randomDuration } from "@/utils/functions";

const TestimonialSlider = () => {
    const [cols, setcols] = useState<number>(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setcols(1);
            } else {
                setcols(3);
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
            className="h-[35rem] overflow-hidden flex items-center"
            offset={-80}
            size={90}
            hideScrollBar
        >
            <div className="flex justify-between max-w-5xl gap-[1.5rem] h-screen shrink-0 mx-auto overflow-hidden">
                {[...new Array(cols)].map((_, i) => {
                    const colsDurations = [
                        ['15000ms', '15000ms'],
                        ['23000ms', '23000ms'],
                        ['14000ms', '14000ms'],
                    ];

                    return (
                        <div className="flex flex-col overflow-hidden" key={i + 1}>
                            {[...new Array(2)].map((_, j) => (
                                <div
                                    className="max-w-none flex flex-col animate-infinite-scroll"
                                    style={{
                                        animationDuration: colsDurations[i][j],
                                    }}
                                    aria-hidden={i % 2 === 0 ? true : false}
                                    key={j + 1}
                                >
                                    {testimonials
                                        .map((testimonial, k) => (
                                            <div className="p-6" key={k + 1}>
                                                <Cards.CardTestimoni
                                                    name={testimonial.name}
                                                    src={testimonial.image}
                                                    text={testimonial.text}
                                                />
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </ScrollShadow>

    );
};

export default TestimonialSlider;

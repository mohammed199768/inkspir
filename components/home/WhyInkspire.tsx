// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Innovation First",
        description: "We push boundaries with cutting-edge technology and creative solutions.",
    },
    {
        title: "User-Centric",
        description: "Every decision is made with the end-user's experience in mind.",
    },
    {
        title: "Data Driven",
        description: "Strategic insights guide our design and development process.",
    },
    {
        title: "Scalable Growth",
        description: "Solutions built to grow and evolve with your business needs.",
    },
];

export default function WhyInkspire() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const closingRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const grid = gridRef.current;
        const closing = closingRef.current;

        if (!section || !title || !grid || !closing) return;

        const cards = grid.children;

        gsap.fromTo(
            title,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: grid,
                    start: "top 75%",
                },
            }
        );

        gsap.fromTo(
            closing,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: grid,
                    start: "bottom 90%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 sm:py-32 bg-zinc-900 text-white overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2
                        ref={titleRef}
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Why Choose Inkspire?
                    </h2>
                </div>

                <div
                    ref={gridRef}
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                        >
                            <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white">
                                {feature.title}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                <p className="flex-auto">{feature.description}</p>
                            </dd>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p
                        ref={closingRef}
                        className="text-primary-400 font-medium text-xl"
                    >
                        This is how we build work that lasts.
                    </p>
                </div>
            </div>
        </section>
    );
}

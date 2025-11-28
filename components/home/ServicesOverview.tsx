// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Brand Identity",
        description: "Crafting unique visual languages that resonate with your audience and define your market presence.",
        link: "/services/branding",
    },
    {
        id: "02",
        title: "Web Development",
        description: "Building immersive, high-performance websites that drive engagement and deliver results.",
        link: "/services/web-development",
    },
    {
        id: "03",
        title: "Digital Strategy",
        description: "Data-driven insights and strategic planning to elevate your brand's digital footprint.",
        link: "/services/strategy",
    },
    {
        id: "04",
        title: "Content Creation",
        description: "Compelling storytelling through visuals and copy that connects and converts.",
        link: "/services/content",
    },
    {
        id: "05",
        title: "Motion Design",
        description: "Bringing your brand to life with fluid animations and captivating motion graphics.",
        link: "/services/motion",
    },
];

export default function ServicesOverview() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const title = titleRef.current;
        const list = listRef.current;

        if (!section || !title || !list) return;

        const items = list.children;

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
            items,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: list,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 sm:py-32 bg-black text-white overflow-hidden"
        >
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-16 md:mb-24">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        Our Expertise
                    </h2>
                </div>

                <div ref={listRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="group relative block p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">
                                    {service.id}
                                </span>
                                <svg
                                    className="w-6 h-6 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {service.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

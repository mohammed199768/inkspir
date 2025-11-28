// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const clients = [
    { type: "text", value: "DMC Medical Complex" },
    { type: "image", src: "/1.svg", alt: "Client 1" },
    { type: "text", value: "Bibars Stores" },
    { type: "image", src: "/2.svg", alt: "Client 2" },
    { type: "text", value: "Commitment" },
    { type: "image", src: "/3.svg", alt: "Client 3" },
    { type: "text", value: "Sectors" },
    { type: "image", src: "/4.svg", alt: "Client 4" },
    { type: "text", value: "InnovateTech" },
    { type: "image", src: "/5.svg", alt: "Client 5" },
];

export default function FeaturedClients() {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const marquee = marqueeRef.current;

        if (!section || !marquee) return;

        gsap.fromTo(
            section,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-16 sm:py-24 bg-black"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                        Trusted Partners
                    </h2>
                    <div className="text-sm uppercase tracking-widest text-gray-500">
                        Collaborative Excellence
                    </div>
                </div>

                <div ref={marqueeRef} className="relative overflow-hidden">
                    <div className="flex animate-marquee gap-16">
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[200px]"
                            >
                                {client.type === "text" ? (
                                    <div className="text-center">
                                        <div className="text-2xl font-semibold text-white/80 hover:text-white transition-colors">
                                            {client.value}
                                        </div>
                                    </div>
                                ) : (
                                    <Image
                                        src={client.src!}
                                        alt={client.alt!}
                                        width={120}
                                        height={60}
                                        className="opacity-70 hover:opacity-100 transition-opacity brightness-0 invert"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

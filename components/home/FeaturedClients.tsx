"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateWordReveal } from "@/lib/animations";

type Client = {
    type: "text" | "image";
    value: string;
};

const clients: Client[] = [
    { type: "image", value: "/1.svg" },
    { type: "text", value: "Padel Me Club" },
    { type: "image", value: "/2.svg" },
    { type: "text", value: "Quattro Village" },
    { type: "image", value: "/3.svg" },
    { type: "text", value: "Jordan Pioneers" },
    { type: "image", value: "/4.svg" },
    { type: "text", value: "Slate Film Services" },
    { type: "image", value: "/5.svg" },
    { type: "text", value: "Jaljal Contracting" },
    { type: "text", value: "Bibars Stores" },
    { type: "text", value: "Al Ghaf Catering" },
    { type: "text", value: "Avant Clinics" },
    { type: "text", value: "HAMC Medical Complex" },
    { type: "text", value: "SKN Clinic" },
    { type: "text", value: "U Medical Clinic" },
    { type: "text", value: "Healthy World" },
    { type: "text", value: "Bituti Restaurant" },
    { type: "text", value: "Yalla Mansaf" },
    { type: "text", value: "Dimois Training Institute" },
    // Duplicates for seamless loop
    { type: "image", value: "/1.svg" },
    { type: "text", value: "Padel Me Club" },
    { type: "image", value: "/2.svg" },
    { type: "text", value: "Quattro Village" },
    { type: "image", value: "/3.svg" },
    { type: "text", value: "Jordan Pioneers" },
    { type: "image", value: "/4.svg" },
    { type: "text", value: "Slate Film Services" },
    { type: "image", value: "/5.svg" },
    { type: "text", value: "Jaljal Contracting" },
    { type: "text", value: "Bibars Stores" },
    { type: "text", value: "Al Ghaf Catering" },
    { type: "text", value: "Avant Clinics" },
    { type: "text", value: "HAMC Medical Complex" },
    { type: "text", value: "SKN Clinic" },
    { type: "text", value: "U Medical Clinic" },
    { type: "text", value: "Healthy World" },
    { type: "text", value: "Bituti Restaurant" },
    { type: "text", value: "Yalla Mansaf" },
    { type: "text", value: "Dimois Training Institute" },
];

export default function FeaturedClients() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const marqueeInnerRef = useRef<HTMLDivElement>(null);
    const closingCardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (titleRef.current) {
                ScrollTrigger.create({
                    trigger: titleRef.current,
                    start: "top 80%",
                    onEnter: () => {
                        animateWordReveal(titleRef.current!, {
                            stagger: 0.08,
                            duration: 0.6,
                        });
                    },
                    once: true,
                });
            }

            // Infinite Marquee Animation
            if (marqueeInnerRef.current) {
                const totalWidth = marqueeInnerRef.current.scrollWidth / 2; // Half because we duplicated

                gsap.to(marqueeInnerRef.current, {
                    x: -totalWidth,
                    duration: 50, // Slower for better visibility
                    ease: "none",
                    repeat: -1,
                });
            }

            if (closingCardRef.current) {
                gsap.fromTo(
                    closingCardRef.current,
                    { opacity: 0, scale: 0.95, y: 30 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: closingCardRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );

                // Animate highlighted words
                const highlights = closingCardRef.current.querySelectorAll(".highlight");
                gsap.fromTo(
                    highlights,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        delay: 0.4,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: closingCardRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 overflow-hidden"
            id="clients"
        >
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-display font-bold gradient-text"
                    >
                        Brands That Grew With Inkspire
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Inkspire has partnered with diverse sectors across Jordan and the
                        GCC: hospitality, F&B, sports, medical, production, construction,
                        lifestyle, and education.
                    </p>
                </div>

                {/* Marquee Container */}
                <div ref={marqueeRef} className="w-full overflow-hidden mb-20 mask-gradient-x">
                    <div ref={marqueeInnerRef} className="flex gap-8 w-max items-center">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 glass px-8 py-4 rounded-full border border-white/10 hover:border-primary/50 transition-colors duration-300 flex items-center justify-center h-20 min-w-[150px]"
                            >
                                {client.type === "image" ? (
                                    <img
                                        src={client.value}
                                        alt="Client Logo"
                                        className="h-12 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <span className="text-xl font-display font-medium text-gray-300 whitespace-nowrap">
                                        {client.value}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div ref={closingCardRef} className="glass-strong p-8 md:p-12 text-center rounded-3xl max-w-3xl mx-auto">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Each one trusted us with their story, and we delivered with{" "}
                        <span className="highlight gradient-text font-semibold">passion</span>,{" "}
                        <span className="highlight gradient-text font-semibold">precision</span>, and{" "}
                        <span className="highlight gradient-text font-semibold">creativity</span>.
                    </p>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-magenta-500/10 blur-3xl rounded-full" />
        </section>
    );
}

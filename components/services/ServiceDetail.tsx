// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Service {
    title: string;
    icon: string;
    description: string;
    features: string[];
    process: string[];
    deliverables: string[];
}

interface ServiceDetailProps {
    service: Service;
    index: number;
}

export default function ServiceDetail({ service, index }: ServiceDetailProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            if (iconRef.current) {
                gsap.fromTo(
                    iconRef.current,
                    { scale: 0, rotation: -180 },
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "elastic.out(1, 0.5)",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }

            const lists = cardRef.current?.querySelectorAll(".service-list");
            lists?.forEach((list) => {
                const items = list.querySelectorAll("li");
                gsap.fromTo(
                    items,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: list,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={cardRef}
            className="glass-strong p-8 md:p-10 rounded-3xl space-y-8 hover:scale-[1.02] transition-transform duration-300"
        >
            <div className="flex items-start gap-6">
                <div
                    ref={iconRef}
                    className="text-6xl flex-shrink-0"
                >
                    {service.icon}
                </div>
                <div className="flex-1">
                    <h3
                        ref={titleRef}
                        className="text-3xl font-display font-bold gradient-text mb-3"
                    >
                        {service.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {service.description}
                    </p>
                </div>
            </div>

            <div>
                <h4 className="text-xl font-semibold text-white mb-4">What's Included</h4>
                <ul className="service-list space-y-3">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-gradient-to-br from-primary to-magenta-500 flex items-center justify-center">
                                <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-xl font-semibold text-white mb-4">Our Process</h4>
                <ul className="service-list space-y-3">
                    {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-gradient-to-br from-primary to-magenta-500 flex items-center justify-center text-white text-xs font-bold">
                                {idx + 1}
                            </div>
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-xl font-semibold text-white mb-4">Deliverables</h4>
                <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, idx) => (
                        <span
                            key={idx}
                            className="glass px-4 py-2 rounded-full text-sm text-gray-300 hover:glass-strong transition-all"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

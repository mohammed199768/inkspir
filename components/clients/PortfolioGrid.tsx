// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PortfolioItem {
    client: string;
    category: string;
    description: string;
    services: string[];
    results?: string[];
}

interface PortfolioGridProps {
    items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
    const gridRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (gridRef.current) {
                const cards = gridRef.current.querySelectorAll(".portfolio-card");

                gsap.fromTo(
                    cards,
                    {
                        opacity: 0,
                        scale: 0.9,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: {
                            amount: 0.8,
                            from: "start",
                            grid: [3, 5],
                        },
                        ease: "back.out(1.3)",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 75%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="portfolio-card group glass p-6 rounded-2xl hover:glass-strong transition-all duration-300 cursor-pointer space-y-4"
                >
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white group-hover:gradient-text transition-all">
                            {item.client}
                        </h3>
                        <p className="text-primary-light text-sm font-medium mt-1">
                            {item.category}
                        </p>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                    </p>

                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                            Services Provided
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.services.map((service, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary-light"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>

                    {item.results && item.results.length > 0 && (
                        <div className="pt-4 border-t border-gray-700/50">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                Key Results
                            </p>
                            <ul className="space-y-1">
                                {item.results.map((result, idx) => (
                                    <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                                        <span className="text-primary">â€¢</span>
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-magenta-500 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
            ))}
        </div>
    );
}

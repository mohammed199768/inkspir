// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { animateWordReveal } from "@/lib/animations";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ title, subtitle, description, breadcrumbs }: PageHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const breadcrumbsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (breadcrumbsRef.current) {
                tl.fromTo(
                    breadcrumbsRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    0
                );
            }

            if (titleRef.current) {
                const titleAnim = animateWordReveal(titleRef.current!, {
                    stagger: 0.1,
                    duration: 0.7,
                    delay: 0,
                });
                tl.add(titleAnim, 0.1);
            }

            if (subtitleRef.current) {
                tl.fromTo(
                    subtitleRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    0.6
                );
            }

            if (descriptionRef.current) {
                tl.fromTo(
                    descriptionRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    0.8
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/30 via-magenta-500/20 to-transparent blur-3xl rounded-full" />
                <div className="absolute top-40 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-primary-light/20 to-transparent blur-3xl rounded-full" />
            </div>

            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-magenta-500 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <div ref={breadcrumbsRef} className="flex items-center justify-center gap-2 text-sm">
                            {breadcrumbs.map((crumb, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <a
                                        href={crumb.href}
                                        className="text-gray-400 hover:text-primary transition-colors"
                                    >
                                        {crumb.label}
                                    </a>
                                    {index < breadcrumbs.length - 1 && (
                                        <span className="text-gray-600">/</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-display font-bold gradient-text"
                    >
                        {title}
                    </h1>

                    {subtitle && (
                        <p
                            ref={subtitleRef}
                            className="text-2xl md:text-3xl text-white font-medium"
                        >
                            {subtitle}
                        </p>
                    )}

                    {description && (
                        <p
                            ref={descriptionRef}
                            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

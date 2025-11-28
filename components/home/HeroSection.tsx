"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import {
    animateWordReveal,
    animateCharReveal,
    animateFadeInUp,
    animateScaleIn,
    animateSlideIn,
    createFloatAnimation,
} from "@/lib/animations";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const ctaContainerRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);
    const introducingRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLDivElement[]>([]);
    const decorativeElementsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([descriptionRef.current], {
                opacity: 0,
            });

            // Timeline for orchestrating animations
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Animate introducing label with lines
            if (introducingRef.current) {
                const lines = introducingRef.current.querySelectorAll(".intro-line");
                const text = introducingRef.current.querySelector(".intro-text");

                tl.fromTo(
                    lines,
                    { width: 0 },
                    { width: "5rem", duration: 0.8, stagger: 0.1 },
                    0.1
                ).fromTo(
                    text,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    0.3
                );
            }

            // 2. Animate title word by word with dramatic effect
            if (titleRef.current) {
                // Add animation directly to timeline to fix FOUC
                const titleAnim = animateWordReveal(titleRef.current!, {
                    delay: 0,
                    stagger: 0.12,
                    duration: 0.8,
                });
                tl.add(titleAnim, 0.3);
            }

            // 3. Animate subtitle with character reveal
            if (subtitleRef.current) {
                const subtitleAnim = animateCharReveal(subtitleRef.current!, {
                    delay: 0,
                    stagger: 0.02,
                });
                tl.add(subtitleAnim, 1.0);
            }

            // 4. Animate description
            if (descriptionRef.current) {
                tl.fromTo(
                    descriptionRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    1.4
                );
            }

            // 5. Animate CTA buttons
            if (ctaContainerRef.current) {
                const buttons = ctaContainerRef.current.querySelectorAll("a");
                tl.fromTo(
                    buttons,
                    { opacity: 0, scale: 0.8, y: 20 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                    },
                    1.8
                );
            }

            // 6. Animate scroll indicator
            if (scrollIndicatorRef.current) {
                tl.fromTo(
                    scrollIndicatorRef.current,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.8 },
                    2.2
                );

                // Continuous bounce for scroll dot
                const scrollDot = scrollIndicatorRef.current.querySelector(".scroll-dot");
                if (scrollDot) {
                    gsap.to(scrollDot, {
                        y: 15,
                        duration: 0.8,
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: true,
                    });
                }
            }

            // 7. Animate decorative elements with float
            decorativeElementsRef.current.forEach((el, index) => {
                if (el) {
                    gsap.fromTo(
                        el,
                        { opacity: 0, scale: 0 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            delay: 3 + index * 0.2,
                            ease: "back.out(1.7)",
                        }
                    );
                    createFloatAnimation(el, {
                        y: 15 + index * 5,
                        duration: 3 + index * 0.5,
                    });
                }
            });

            // 8. Parallax effect on background elements
            const spotlights = containerRef.current?.querySelectorAll(".spotlight");
            spotlights?.forEach((spotlight, index) => {
                gsap.to(spotlight, {
                    y: -50 * (index + 1),
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });

            // 9. Animate accent lines
            linesRef.current.forEach((line, index) => {
                if (line) {
                    gsap.fromTo(
                        line,
                        { scaleX: 0, opacity: 0 },
                        {
                            scaleX: 1,
                            opacity: 0.2,
                            duration: 1.5,
                            delay: 1 + index * 0.2,
                            ease: "power2.out",
                        }
                    );
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Spotlight Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
                <div className="spotlight absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/30 via-magenta-500/20 to-transparent blur-3xl rounded-full" />
                <div className="spotlight absolute top-40 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-primary-light/20 to-transparent blur-3xl rounded-full" />
                <div className="spotlight absolute top-40 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-magenta-500/20 to-transparent blur-3xl rounded-full" />
            </div>

            {/* Accent Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div
                    ref={(el) => { if (el) linesRef.current[0] = el; }}
                    className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                />
                <div
                    ref={(el) => { if (el) linesRef.current[1] = el; }}
                    className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-magenta-500 to-transparent"
                />
                <div
                    ref={(el) => { if (el) linesRef.current[2] = el; }}
                    className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                />
                <div
                    ref={(el) => { if (el) linesRef.current[3] = el; }}
                    className="absolute top-1/4 bottom-1/4 left-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                />
                <div
                    ref={(el) => { if (el) linesRef.current[4] = el; }}
                    className="absolute top-1/4 bottom-1/4 right-1/4 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    {/* Introducing Label */}
                    <div
                        ref={introducingRef}
                        className="flex items-center justify-center gap-4"
                    >
                        <div className="intro-line h-px w-20 bg-gradient-to-r from-transparent to-primary" />
                        <p className="intro-text text-gray-400 uppercase text-sm tracking-widest">

                        </p>
                        <div className="intro-line h-px w-20 bg-gradient-to-l from-transparent to-primary" />
                    </div>

                    {/* Main Title */}
                    <div className="space-y-4">
                        <h1
                            ref={titleRef}
                            className="text-6xl md:text-8xl font-display font-bold relative"
                        >
                            <span className="gradient-text block mb-2">Inkspire</span>

                        </h1>
                        <p
                            ref={subtitleRef}
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            Where ideas turn into stories that move people and build brands.
                        </p>
                    </div>

                    {/* Subtitle */}
                    <p
                        ref={descriptionRef}
                        className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Inkspire is a creative studio built on intuition, emotion, and
                        strategy. We turn blank pages into brands with identity, businesses
                        into stories with meaning, and social feeds into experiences people
                        actually engage with.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        ref={ctaContainerRef}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <a
                            href="mailto:hello@inkspiresa.com"
                            className="group relative glass-strong px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">Start Your Project</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                        <a
                            href="/#clients"
                            className="glass px-8 py-4 rounded-full font-medium gradient-text hover:glass-strong transition-all duration-300 hover:scale-105"
                        >
                            Explore Our Work
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div ref={scrollIndicatorRef} className="pt-16 flex flex-col items-center justify-center">
                        <div className="scroll-indicator text-xs font-medium tracking-[0.2em] text-gray-500 mb-2">SCROLL</div>
                        <svg className="w-5 h-5 animate-bounce-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="22.5" />
                            <line x1="12.1" y1="22.4" x2="18.9" y2="15.6" />
                            <line x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div
                ref={(el) => { if (el) decorativeElementsRef.current[0] = el; }}
                className="absolute bottom-20 left-10 w-4 h-4 border-2 border-primary/50 rounded-full"
            />
            <div
                ref={(el) => { if (el) decorativeElementsRef.current[1] = el; }}
                className="absolute bottom-40 right-10 w-3 h-3 border-2 border-magenta-500/50 rounded-full"
            />
            <div
                ref={(el) => { if (el) decorativeElementsRef.current[2] = el; }}
                className="absolute top-40 left-20 w-2 h-2 bg-primary/50 rounded-full"
            />
            <div
                ref={(el) => { if (el) decorativeElementsRef.current[3] = el; }}
                className="absolute top-60 right-20 w-2 h-2 bg-magenta-500/50 rounded-full"
            />
        </section>
    );
}

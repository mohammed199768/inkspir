// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const heading = headingRef.current;
        const description = descriptionRef.current;
        const button = buttonRef.current;

        if (!section || !heading || !description || !button) return;

        gsap.fromTo(
            [heading, description, button],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-24 sm:py-32 bg-black"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        ref={headingRef}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        Ready to Transform Your Brand?
                    </h2>
                    <p
                        ref={descriptionRef}
                        className="mt-6 text-lg leading-8 text-gray-300"
                    >
                        Whether you need branding, content, or a full digital plan — we're here to help.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            ref={buttonRef}
                            href="/contact"
                            className="group relative rounded-md bg-white px-8 py-4 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10">Let's Create Together</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

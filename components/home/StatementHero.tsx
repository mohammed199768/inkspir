// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function StatementHero() {
    const textRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Animate letters with staggered entrance and continuous looping
    useEffect(() => {
        if (!textRef.current) return;

        const letters = textRef.current.querySelectorAll(".letter");
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1.5,
            yoyo: true,
        });

        timelineRef.current = tl;

        // Randomize each letter's starting position and rotation
        letters.forEach((letter) => {
            gsap.set(letter, {
                x: gsap.utils.random(-500, 500),
                y: gsap.utils.random(-500, 500),
                rotation: gsap.utils.random(-720, 720),
                scale: 0,
                opacity: 0,
            });
        });

        // Bring all letters back to their final positions smoothly
        tl.staggerTo(
            letters,
            1.5,
            {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 0,
                ease: "power4.inOut",
            },
            0.025
        );

        return () => {
            tl.kill();
        };
    }, []);

    const handleMouseEnter = () => {
        if (timelineRef.current) {
            timelineRef.current.timeScale(0.15);
        }
    };

    const handleMouseLeave = () => {
        if (timelineRef.current) {
            timelineRef.current.timeScale(1);
        }
    };

    return (
        <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-black">
            {/* Hero Content */}
            <div
                className="relative z-10 flex items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={textRef}
                    className="text-center px-6 select-none cursor-pointer"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white flex justify-center gap-2 md:gap-4">
                        <span className="letter inline-block">I</span>
                        <span className="letter inline-block">N</span>
                        <span className="letter inline-block">K</span>
                        <span className="letter inline-block">S</span>
                        <span className="letter inline-block">P</span>
                        <span className="letter inline-block">I</span>
                        <span className="letter inline-block">R</span>
                        <span className="letter inline-block">E</span>
                    </h1>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <ScrollIndicator />
            </div>
        </section>
    );
}

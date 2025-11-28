// © Mohammad Aldomi — Project Source Code

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function SplitScreenLoader({ onComplete }: { onComplete: () => void }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const sectionLeftRef = useRef<HTMLDivElement>(null);
    const sectionRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger loaded state after 3.5 seconds
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoaded && wrapperRef.current && loaderRef.current && sectionLeftRef.current && sectionRightRef.current) {
            // Fade out the loader
            gsap.to(loaderRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            });

            // Slide away the split sections
            gsap.to(sectionLeftRef.current, {
                x: "-100%",
                duration: 0.7,
                delay: 0.3,
                ease: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            });

            gsap.to(sectionRightRef.current, {
                x: "100%",
                duration: 0.7,
                delay: 0.3,
                ease: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
            });

            // Hide wrapper and trigger completion
            gsap.to(wrapperRef.current, {
                y: "-100%",
                visibility: "hidden",
                duration: 0.3,
                delay: 1,
                ease: "power2.out",
                onComplete: onComplete,
            });
        }
    }, [isLoaded, onComplete]);

    return (
        <div ref={wrapperRef} className="fixed inset-0 z-[10000] overflow-hidden">
            {/* Spinning Loader */}
            <div ref={loaderRef} className="absolute left-1/2 top-1/2 z-[11] -ml-[75px] -mt-[75px]">
                <div className="relative h-[150px] w-[150px] animate-spin-slow">
                    <div className="h-full w-full rounded-full border-[3px] border-transparent border-t-[#16a085]" />
                    <div className="absolute inset-[5px] rounded-full border-[3px] border-transparent border-t-[#e74c3c] animate-spin-reverse-fast" />
                    <div className="absolute inset-[15px] rounded-full border-[3px] border-transparent border-t-[#f9c922] animate-spin-medium" />
                </div>
            </div>

            {/* Left Section */}
            <div
                ref={sectionLeftRef}
                className="fixed left-0 top-0 z-[10] h-full w-[51%] bg-[#222]"
            />

            {/* Right Section */}
            <div
                ref={sectionRightRef}
                className="fixed right-0 top-0 z-[10] h-full w-[51%] bg-[#222]"
            />
        </div>
    );
}

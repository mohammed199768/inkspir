// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Neon Dreams",
        category: "Digital Art",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Future Tech",
        category: "Web Design",
        gradient: "from-blue-500 to-teal-500",
    },
    {
        title: "Urban Pulse",
        category: "Photography",
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Eco Sphere",
        category: "Branding",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        title: "Cyber Flow",
        category: "Motion",
        gradient: "from-indigo-500 to-cyan-500",
    },
];

export default function ScrollyImages() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        const totalWidth = container.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.to(container, {
            x: -(totalWidth - viewportWidth),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalWidth}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
            <div className="absolute left-8 top-8 z-10">
                <h2 className="text-4xl font-bold text-white mix-blend-difference">
                    Selected Works
                </h2>
            </div>
            <div
                ref={containerRef}
                className="flex h-full items-center gap-12 px-12"
                style={{ width: "fit-content" }}
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative h-[60vh] w-[40vw] min-w-[400px] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} shadow-2xl transition-transform duration-500 hover:scale-105 group`}
                    >
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                            <span className="text-sm font-medium text-white/80 uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h3 className="mt-2 text-3xl font-bold text-white">
                                {project.title}
                            </h3>
                            <div className="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="inline-block rounded-full border border-white/30 px-4 py-2 text-sm text-white backdrop-blur-sm">
                                    View Case Study
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

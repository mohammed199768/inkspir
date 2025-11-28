// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
    {
        client: "Padel Me Club",
        quote: "Inkspire transformed our brand identity and social presence. Their creative approach helped us stand out in a competitive market.",
        role: "Founder",
    },
    {
        client: "Quattro Village",
        quote: "Professional, creative, and strategic. They understood our vision and brought it to life beyond our expectations.",
        role: "Marketing Director",
    },
    {
        client: "Avant Clinics",
        quote: "The team at Inkspire delivers consistently high-quality content that resonates with our audience. True creative partners.",
        role: "CEO",
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll(".testimonial-card");

                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
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
        <section ref={sectionRef} className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We measure success by the relationships we build and the results we deliver.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="testimonial-card glass-strong p-8 rounded-2xl space-y-4 hover:scale-105 transition-transform duration-300"
                        >
                            {/* Quote */}
                            <div className="text-5xl text-primary opacity-30">"</div>
                            <p className="text-gray-300 leading-relaxed">
                                {testimonial.quote}
                            </p>

                            {/* Attribution */}
                            <div className="pt-4 border-t border-gray-700/50">
                                <p className="font-bold text-white">{testimonial.client}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-magenta-500/5 blur-3xl rounded-full" />
        </section>
    );
}

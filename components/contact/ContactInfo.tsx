// � Mohammad Aldomi � Project Source Code

"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contactMethods = [
    {
        icon: "📩",
        title: "Email",
        value: "mohammed.aldomi68@gmail.com",
        href: "mailto:mohammed.aldomi68@gmail.com",
    },
    {
        icon: "📱",
        title: "Instagram",
        value: "@inkspiresa",
        href: "https://instagram.com/inkspiresa",
    },
    {
        icon: "🌐",
        title: "Website",
        value: "inkspiresa.com",
        href: "https://inkspiresa.com",
    },
];

export default function ContactInfo() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (containerRef.current) {
                const cards = containerRef.current.querySelectorAll(".contact-card");
                gsap.fromTo(
                    cards,
                    { opacity: 0, scale: 0.9, y: 20 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text mb-4">
                    Get In Touch
                </h2>
                <p className="text-gray-400 text-lg">
                    Choose your preferred way to connect with us
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                    <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="contact-card group glass-strong p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <div className="text-5xl mb-4">{method.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {method.title}
                        </h3>
                        <p className="text-primary-light font-medium group-hover:gradient-text transition-all">
                            {method.value}
                        </p>
                    </a>
                ))}
            </div>

            {/* Office Hours */}
            <div className="glass p-8 rounded-2xl text-center mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-400">
                    <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                    <p>Weekend: By Appointment</p>
                </div>
                <p className="text-primary-light mt-4 text-sm">
                    We typically respond within 24 hours
                </p>
            </div>
        </div>
    );
}

// © Mohammad Aldomi — Project Source Code

"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const navLinksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (logoRef.current) {
                tl.fromTo(
                    logoRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    0.2
                );
            }

            if (navLinksRef.current) {
                const links = navLinksRef.current.querySelectorAll("a");
                tl.fromTo(
                    links,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
                    0.3
                );
            }
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-white/5"
                    : "bg-transparent"
            )}
        >
            <nav className="container mx-auto px-6 py-4">
                {/* صف واحد: لوجو يسار + روابط + زر يمين */}
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link
                        ref={logoRef}
                        href="/"
                        className="relative group"
                    >
                        <div className="navbar-logo absolute -top-20 left-0 w-52 h-52 md:w-72 md:h-72 pointer-events-auto">
                            <img
                                src="/4.svg"
                                alt="Inkspire Logo"
                                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]"
                            />
                        </div>
                    </Link>

                    {/* روابط + زر */}
                    <div className="flex items-center gap-8">
                        {/* Navigation Links */}
                        <div
                            ref={navLinksRef}
                            className="hidden md:flex items-center gap-10"
                        >
                            <Link
                                href="/"
                                className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-foreground transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-foreground transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="/clients"
                                className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-foreground transition-colors"
                            >
                                Clients
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-foreground transition-colors"
                            >
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button with Magnetic Effect */}
                        <MagneticButton
                            href="mailto:mohammed.aldomi68@gmail.com"
                            className="px-6 py-2 border border-secondary text-secondary text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300"
                        >
                            Let&apos;s Talk
                        </MagneticButton>
                    </div>
                </div>
            </nav>
        </header>
    );
}

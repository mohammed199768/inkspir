// © Mohammad Aldomi — Project Source Code

"use client";

import { useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface MagneticButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    strength?: number;
}

export default function MagneticButton({
    children,
    href,
    onClick,
    className = "",
    strength = 0.3,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const rect = button.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left - rect.width / 2;
            const y = mouseEvent.clientY - rect.top - rect.height / 2;

            gsap.to(button, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
            });
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    if (href) {
        return (
            <Link
                ref={buttonRef as React.RefObject<HTMLAnchorElement>}
                href={href}
                className={className}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            ref={buttonRef as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}

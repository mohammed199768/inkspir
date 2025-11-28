// © Mohammad Aldomi — Project Source Code

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Splits text content into individual words wrapped in span elements.
 * Each word is wrapped for independent animation control.
 */
export function splitTextIntoWords(element: HTMLElement): HTMLElement[] {
    // Return existing words if already split to avoid re-processing
    const existingWords = element.querySelectorAll(".word");
    if (existingWords.length > 0) {
        return Array.from(existingWords) as HTMLElement[];
    }

    const text = element.textContent || "";
    const words = text.split(" ");

    element.innerHTML = words
        .map((word) => `<span class="word" style="display: inline-block;">${word}&nbsp;</span>`)
        .join("");

    return Array.from(element.querySelectorAll(".word")) as HTMLElement[];
}

/**
 * Splits text content into individual characters wrapped in span elements.
 * Perfect for typewriter-style or character-based animations.
 */
export function splitTextIntoChars(element: HTMLElement): HTMLElement[] {
    // Return existing characters if already split
    const existingChars = element.querySelectorAll(".char");
    if (existingChars.length > 0) {
        return Array.from(existingChars) as HTMLElement[];
    }

    const text = element.textContent || "";
    const chars = text.split("");

    element.innerHTML = chars
        .map((char) =>
            char === " "
                ? `<span class="char" style="display: inline-block;">&nbsp;</span>`
                : `<span class="char" style="display: inline-block;">${char}</span>`
        )
        .join("");

    return Array.from(element.querySelectorAll(".char")) as HTMLElement[];
}

/**
 * Animates text by revealing it word by word with a 3D rotation effect.
 */
export function animateWordReveal(
    element: HTMLElement,
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        ease?: string;
        onComplete?: () => void;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.08,
        duration = 0.6,
        ease = "power3.out",
        onComplete,
    } = options;

    const words = splitTextIntoWords(element);

    return gsap.fromTo(
        words,
        {
            opacity: 0,
            y: 20,
            rotationX: -90,
        },
        {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration,
            stagger,
            delay,
            ease,
            onComplete,
        }
    );
}

/**
 * Creates a typewriter effect by revealing text character by character.
 */
export function animateCharReveal(
    element: HTMLElement,
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        ease?: string;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.03,
        duration = 0.3,
        ease = "power2.out",
    } = options;

    const chars = splitTextIntoChars(element);

    return gsap.fromTo(
        chars,
        {
            opacity: 0,
            x: -10,
        },
        {
            opacity: 1,
            x: 0,
            duration,
            stagger,
            delay,
            ease,
        }
    );
}

/**
 * Fades elements in while sliding them upward from below.
 */
export function animateFadeInUp(
    elements: HTMLElement | HTMLElement[],
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        y?: number;
        ease?: string;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.1,
        duration = 0.8,
        y = 30,
        ease = "power3.out",
    } = options;

    gsap.fromTo(
        elements,
        {
            opacity: 0,
            y,
        },
        {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            ease,
        }
    );
}

/**
 * Scales elements in from a smaller size with a bouncy elastic effect.
 */
export function animateScaleIn(
    elements: HTMLElement | HTMLElement[],
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        scale?: number;
        ease?: string;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.1,
        duration = 0.6,
        scale = 0.8,
        ease = "back.out(1.7)",
    } = options;

    gsap.fromTo(
        elements,
        {
            opacity: 0,
            scale,
        },
        {
            opacity: 1,
            scale: 1,
            duration,
            stagger,
            delay,
            ease,
        }
    );
}

/**
 * Creates a 3D flip-in effect by rotating elements on the Y-axis.
 */
export function animateFlipIn(
    elements: HTMLElement | HTMLElement[],
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        ease?: string;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.05,
        duration = 0.8,
        ease = "power2.out",
    } = options;

    gsap.fromTo(
        elements,
        {
            opacity: 0,
            rotationY: -90,
            transformPerspective: 1000,
        },
        {
            opacity: 1,
            rotationY: 0,
            duration,
            stagger,
            delay,
            ease,
        }
    );
}

/**
 * Slides elements in from any direction (left, right, top, or bottom).
 */
export function animateSlideIn(
    elements: HTMLElement | HTMLElement[],
    options: {
        delay?: number;
        stagger?: number;
        duration?: number;
        from?: "left" | "right" | "top" | "bottom";
        distance?: number;
        ease?: string;
    } = {}
) {
    const {
        delay = 0,
        stagger = 0.1,
        duration = 0.8,
        from = "left",
        distance = 100,
        ease = "power3.out",
    } = options;

    const axis = from === "left" || from === "right" ? "x" : "y";
    const value = from === "left" || from === "top" ? -distance : distance;

    gsap.fromTo(
        elements,
        {
            opacity: 0,
            [axis]: value,
        },
        {
            opacity: 1,
            [axis]: 0,
            duration,
            stagger,
            delay,
            ease,
        }
    );
}

/**
 * Triggers an animation when the element comes into view during scroll.
 */
export function createScrollTrigger(
    trigger: HTMLElement,
    animation: gsap.core.Tween | gsap.core.Timeline,
    options: ScrollTrigger.Vars = {}
) {
    return ScrollTrigger.create({
        trigger,
        start: "top 80%",
        toggleActions: "play none none none",
        ...options,
        animation,
    });
}

/**
 * Animate elements on scroll into view
 */
export function animateOnScroll(
    elements: HTMLElement | HTMLElement[],
    animationFn: (el: HTMLElement) => void,
    options: {
        start?: string;
        end?: string;
        scrub?: boolean;
        markers?: boolean;
    } = {}
) {
    const elementsArray = Array.isArray(elements) ? elements : [elements];

    elementsArray.forEach((element) => {
        ScrollTrigger.create({
            trigger: element,
            start: options.start || "top 80%",
            end: options.end || "bottom 20%",
            scrub: options.scrub || false,
            markers: options.markers || false,
            onEnter: () => animationFn(element),
        });
    });
}

/**
 * Creates a smooth parallax scrolling effect by moving elements at different speeds.
 */
export function createParallax(
    element: HTMLElement,
    options: {
        speed?: number;
        start?: string;
        end?: string;
    } = {}
) {
    const { speed = 0.5, start = "top bottom", end = "bottom top" } = options;

    gsap.to(element, {
        y: () => -(element.offsetHeight * speed),
        ease: "none",
        scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: true,
        },
    });
}

/**
 * Animates grid items in a wave pattern for a dynamic sequential reveal.
 */
export function animateGridWave(
    elements: HTMLElement[],
    options: {
        delay?: number;
        duration?: number;
        stagger?: gsap.StaggerVars | number;
    } = {}
) {
    const {
        delay = 0,
        duration = 0.8,
        stagger = {
            amount: 0.5,
            from: "start" as const,
            grid: "auto" as const,
        },
    } = options;

    gsap.fromTo(
        elements,
        {
            opacity: 0,
            scale: 0.8,
            y: 30,
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            delay,
            stagger,
            ease: "power2.out",
        }
    );
}

/**
 * Animates a line element growing from one dimension to another, useful for progress bars.
 */
export function animateLineGrow(
    element: HTMLElement,
    options: {
        delay?: number;
        duration?: number;
        from?: number;
        to?: number;
        axis?: "width" | "height";
    } = {}
) {
    const {
        delay = 0,
        duration = 1,
        from = 0,
        to = 100,
        axis = "width",
    } = options;

    gsap.fromTo(
        element,
        {
            [axis]: `${from}%`,
        },
        {
            [axis]: `${to}%`,
            duration,
            delay,
            ease: "power2.inOut",
        }
    );
}

/**
 * Creates a magnetic hover effect where elements follow the mouse cursor within bounds.
 */
export function createMagneticHover(element: HTMLElement, strength: number = 0.3) {
    const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(element, {
            x: x * strength,
            y: y * strength,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
    };
}

/**
 * Makes an element continuously float up and down in a smooth loop.
 */
export function createFloatAnimation(
    element: HTMLElement,
    options: {
        y?: number;
        duration?: number;
        ease?: string;
    } = {}
) {
    const { y = 20, duration = 3, ease = "sine.inOut" } = options;

    gsap.to(element, {
        y: -y,
        duration,
        ease,
        yoyo: true,
        repeat: -1,
    });
}

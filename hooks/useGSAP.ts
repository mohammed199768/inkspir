// © Mohammad Aldomi — Project Source Code

import { useGSAP as useGSAPOriginal } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once on the client side
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Provide a consistent GSAP hook for use across the application
export const useGSAP = useGSAPOriginal;

export { gsap, ScrollTrigger };

// © Mohammad Aldomi — Project Source Code

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge classnames efficiently with Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

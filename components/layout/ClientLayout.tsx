// © Mohammad Aldomi — Project Source Code

"use client";

import { useState } from "react";
import SplitScreenLoader from "@/components/ui/SplitScreenLoader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <SplitScreenLoader onComplete={() => setLoading(false)} />}
            <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
                {children}
            </div>
        </>
    );
}

// © Mohammad Aldomi — Project Source Code

import React from "react";

// Visual grid overlay for layout alignment and design reference
const LayoutGrid = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 mx-auto flex max-w-7xl px-4 opacity-[0.03]">
            {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 border-x border-primary"></div>
            ))}
        </div>
    );
};

export default LayoutGrid;

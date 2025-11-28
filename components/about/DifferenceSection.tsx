// © Mohammad Aldomi — Project Source Code

const differentiators = [
    {
        title: "Founder-Led Creativity",
        description:
            "Every project is personally led, reviewed, and crafted with direct involvement, no generic agency templates.",
    },
    {
        title: "Multi-Industry Knowledge",
        description:
            "From Padel clubs and F&B to medical, production, and real estate, we know how different audiences think and buy.",
    },
    {
        title: "Social-First Approach",
        description:
            "We create content designed to live on social â€” not just look good, but work in the algorithm.",
    },
    {
        title: "Fast Execution, High Quality",
        description:
            "We deliver fast without sacrificing detail or storytelling.",
    },
    {
        title: "Real Partnership, Not a Vendor Relationship",
        description:
            "We grow with our clients, think with them, plan for them, and build long-term value.",
    },
];

export default function DifferenceSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text text-center">
                        What Makes Inkspire Different
                    </h2>

                    <div className="space-y-6">
                        {differentiators.map((item, index) => (
                            <div
                                key={index}
                                className="glass p-6 md:p-8 rounded-2xl hover:glass-strong transition-all duration-300 group"
                            >
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-magenta-500 flex items-center justify-center font-bold text-white">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
        </section>
    );
}

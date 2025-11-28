// Mohammad Aldomi - Project Source Code

const principles = [
    "Creative direction",
    "Emotional storytelling",
    "Data-backed decisions",
    "Deep understanding of Jordanian, Egyptian & GCC markets",
    "Real brand-building fundamentals",
];

export default function PhilosophySection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
                        We Believe in "Creative Strategy"
                        <br />
                        Not Just Creativity
                    </h2>

                    <div className="glass-strong p-8 md:p-12 rounded-3xl space-y-8 text-left">
                        <div className="space-y-4 text-lg text-gray-300">
                            <p>A great design means nothing without meaning.</p>
                            <p>A reel means nothing without emotion.</p>
                            <p>A campaign means nothing without strategy.</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white font-semibold text-xl">
                                Inkspire blends:
                            </p>
                            <ul className="space-y-3">
                                {principles.map((principle, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-magenta-500" />
                                        {principle}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-primary-light font-medium text-lg pt-4">
                            We don't create random content, we create relevant content.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-magenta-500/10 blur-3xl rounded-full" />
        </section>
    );
}

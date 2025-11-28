// Mohammad Aldomi - Project Source Code

export default function StorySection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text text-center">
                        Our Story
                    </h2>

                    <div className="glass-strong p-8 md:p-12 rounded-3xl space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            Inkspire was born from years of creative work across Saudi Arabia
                            and Jordan, building campaigns, social identities, brand
                            strategies, local productions, and multi-industry marketing plans.
                        </p>

                        <p>
                            This studio is the result of everything I learned — the wins, the
                            projects, the mistakes, and the breakthroughs.
                        </p>

                        <p className="text-white font-medium text-xl">
                            Today, Inkspire stands as a space for brands that want more than
                            just "content."
                        </p>

                        <p>
                            It's for brands that want{" "}
                            <span className="gradient-text font-semibold">identity</span>,{" "}
                            <span className="gradient-text font-semibold">consistency</span>,{" "}
                            <span className="gradient-text font-semibold">strategy</span>, and
                            a partner who actually cares.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-magenta-500/10 blur-3xl rounded-full" />
        </section>
    );
}

// © Mohammad Aldomi — Project Source Code

const promises = [
    "Honesty",
    "Creativity",
    "Strategy",
    "Consistency",
    "Passion",
    "Innovation",
    "Full attention to detail",
];

export default function PromiseSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
                        Our Promise
                    </h2>

                    <div className="glass-strong p-8 md:p-12 rounded-3xl space-y-8">
                        <p className="text-xl text-gray-300">
                            To every client, we promise:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {promises.map((promise, index) => (
                                <div
                                    key={index}
                                    className="glass p-4 rounded-xl hover:glass-strong transition-all duration-300 group"
                                >
                                    <p className="text-lg font-medium text-white group-hover:gradient-text transition-all">
                                        {promise}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-400 pt-4 italic">
                            We don't take projects we can't commit to â€” your brand matters too
                            much for that.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
        </section>
    );
}

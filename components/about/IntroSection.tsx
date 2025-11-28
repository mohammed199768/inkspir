// Mohammad Aldomi - Project Source Code

export default function IntroSection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
                            <p className="text-gray-400 uppercase text-sm tracking-widest">
                                About Us
                            </p>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold gradient-text">
                            The Ink Behind the Vision
                        </h1>
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            Inkspire is a creative studio built on the belief that every brand
                            has a story worth telling — it just needs the right voice,
                            visuals, and platform. We exist to make brands feel human,
                            memorable, and meaningful.
                        </p>

                        <p>
                            I'm <span className="gradient-text font-semibold">Sultan</span> —
                            Marketing Architect, creator, and storyteller with experience
                            across multiple industries, markets, and creative roles. From
                            production houses and medical clinics to sports clubs,
                            restaurants, and corporate clients, I've worked with brands that
                            needed clarity, creativity, and direction.
                        </p>

                        <p className="text-primary-light font-medium text-xl">
                            Inkspire is where all of that experience comes together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

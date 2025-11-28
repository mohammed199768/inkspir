import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Let's Create Something Amazing"
                description="Ready to turn your ideas into reality? Get in touch and let's start a conversation about your next project."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" },
                ]}
            />

            {/* Contact Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div>
                            <ContactInfo />
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    Send Us a Message
                                </h2>
                                <p className="text-gray-400">
                                    Fill out the form and we'll get back to you within 24 hours.
                                </p>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-magenta-500/5 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-20">
                <div className="container mx-auto px-6">
                    <div className="glass-strong p-12 md:p-16 rounded-3xl max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text text-center">
                            Why Work With Inkspire?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center space-y-3">
                                <div className="text-4xl">⚡</div>
                                <h3 className="text-xl font-bold text-white">Fast Response</h3>
                                <p className="text-gray-400 text-sm">
                                    We reply within 24 hours and move quickly on projects
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-4xl">🎯</div>
                                <h3 className="text-xl font-bold text-white">Results-Driven</h3>
                                <p className="text-gray-400 text-sm">
                                    We focus on measurable outcomes that grow your business
                                </p>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-4xl">🤝</div>
                                <h3 className="text-xl font-bold text-white">True Partnership</h3>
                                <p className="text-gray-400 text-sm">
                                    We're invested in your success, not just one-off projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import PageHero from "@/components/shared/PageHero";
import PortfolioGrid from "@/components/clients/PortfolioGrid";
import Testimonials from "@/components/clients/Testimonials";
import CTASection from "@/components/home/CTASection";

const portfolioItems = [
    {
        client: "Padel Me Club",
        category: "Sports & Recreation",
        description: "Complete brand identity and social media strategy for Jordan's premier padel club. Established visual identity and community engagement.",
        services: ["Branding", "Social Media", "Content Creation"],
        results: ["500% follower growth in 3 months", "Increased membership sign-ups by 60%"],
    },
    {
        client: "Quattro Village",
        category: "Hospitality",
        description: "Full digital presence overhaul including website redesign, content strategy, and seasonal campaigns for a luxury resort destination.",
        services: ["Web Development", "Content Creation", "Marketing Campaigns"],
        results: ["200+ booking inquiries monthly", "Extended average booking duration"],
    },
    {
        client: "Jordan Pioneers",
        category: "Non-Profit",
        description: "Brand refresh and awareness campaign for youth empowerment organization, creating impactful visuals that tell compelling stories.",
        services: ["Branding", "Reel Production", "Event Planning"],
        results: ["Reached 1M+ people organically", "Doubled volunteer applications"],
    },
    {
        client: "Slate Film Services",
        category: "Media & Production",
        description: "Visual identity development and promotional materials for film production company, establishing credibility in competitive market.",
        services: ["Branding", "Social Media Design", "Content Creation"],
    },
    {
        client: "Jaljal Contracting",
        category: "Construction",
        description: "Professional brand identity and marketing collateral for construction firm, positioning them as industry leaders.",
        services: ["Branding", "Marketing Research", "Content Creation"],
    },
    {
        client: "Bibars Stores",
        category: "Retail",
        description: "Complete retail brand experience including in-store design, packaging, and social presence for modern convenience stores.",
        services: ["Branding", "Social Media", "Social Media Design"],
        results: ["30% increase in foot traffic", "Strong brand recognition in local market"],
    },
    {
        client: "Al Ghaf Catering",
        category: "Food & Beverage",
        description: "Brand development and food photography that showcases premium catering services for corporate and private events.",
        services: ["Branding", "Content Creation", "Social Media Management"],
    },
    {
        client: "Avant Clinics",
        category: "Healthcare",
        description: "Medical brand positioning and patient-focused content strategy for modern aesthetic clinic chain.",
        services: ["Branding", "Social Media", "Content Creation"],
        results: ["Consistent 40% monthly client growth", "Highest-rated clinic on Google"],
    },
    {
        client: "HAMC Medical Complex",
        category: "Healthcare",
        description: "Professional medical brand identity and digital presence for comprehensive healthcare facility.",
        services: ["Branding", "Web Development", "Social Media Design"],
    },
    {
        client: "SKN Clinic",
        category: "Healthcare",
        description: "Luxury skincare brand development with elegant visuals and educational content strategy.",
        services: ["Branding", "Content Creation", "Reel Production"],
    },
    {
        client: "U Medical Clinic",
        category: "Healthcare",
        description: "Modern medical brand with focus on patient education and community health awareness.",
        services: ["Branding", "Social Media Management", "Content Creation"],
    },
    {
        client: "Healthy World",
        category: "Health & Wellness",
        description: "Wellness brand identity and content creation promoting healthy lifestyle and nutrition.",
        services: ["Branding", "Social Media", "Marketing Campaigns"],
    },
    {
        client: "Bituti Restaurant",
        category: "Food & Beverage",
        description: "Restaurant brand identity and mouthwatering food content that drives reservations and delivery orders.",
        services: ["Branding", "Content Creation", "Social Media Management"],
        results: ["60% increase in online orders", "Full reservations on weekends"],
    },
    {
        client: "Yalla Mansaf",
        category: "Food & Beverage",
        description: "Traditional Jordanian restaurant brand celebrating heritage through modern visual storytelling.",
        services: ["Branding", "Reel Production", "Social Media Design"],
    },
    {
        client: "Dimois Training Institute",
        category: "Education",
        description: "Educational brand positioning and campaign promoting professional development and certification programs.",
        services: ["Branding", "Marketing Campaigns", "Content Creation"],
        results: ["150% enrollment increase", "Expanded course offerings"],
    },
];

export default function ClientsPage() {
    return (
        <>
            <PageHero
                title="Our Clients"
                subtitle="Brands That Grew With Us"
                description="We've partnered with diverse sectors across Jordan and the GCC, delivering creative solutions that drive real results."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Clients", href: "/clients" },
                ]}
            />

            {/* Portfolio Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Our Portfolio
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            From hospitality to healthcare, F&B to sports — we've worked across industries,
                            delivering passion, precision, and creativity in every project.
                        </p>
                    </div>

                    <PortfolioGrid items={portfolioItems} />
                </div>
            </section>

            <Testimonials />

            {/* Sectors Section */}
            <section className="relative py-20">
                <div className="container mx-auto px-6">
                    <div className="glass-strong p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
                            Sectors We Serve
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Hospitality",
                                "Food & Beverage",
                                "Sports & Recreation",
                                "Healthcare",
                                "Medical & Aesthetic",
                                "Real Estate",
                                "Construction",
                                "Retail",
                                "Education",
                                "Non-Profit",
                                "Media & Production",
                                "Health & Wellness",
                            ].map((sector, index) => (
                                <span
                                    key={index}
                                    className="glass px-6 py-3 rounded-full text-gray-300 hover:glass-strong hover:gradient-text transition-all duration-300"
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}

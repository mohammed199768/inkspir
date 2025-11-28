import PageHero from "@/components/shared/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTASection from "@/components/home/CTASection";

const services = [
    {
        title: "Branding",
        icon: "🎨",
        description: "We create brands that feel alive — identities with voice, color, character, and clarity. Your brand isn't just a logo; it's the emotional connection your audience forms with you.",
        features: [
            "Brand strategy & positioning",
            "Logo design & visual identity",
            "Brand guidelines & style guides",
            "Color palette & typography selection",
            "Brand voice & messaging framework",
        ],
        process: [
            "Discovery session to understand your vision and values",
            "Market research & competitor analysis",
            "Concept development & mood boards",
            "Design refinement based on feedback",
            "Final brand package delivery",
        ],
        deliverables: ["Logo Files", "Brand Guidelines", "Color Palette", "Typography Kit", "Business Card Design"],
    },
    {
        title: "Content Creation",
        icon: "📸",
        description: "Photography, social visuals, motion pieces, stories, and ideas that stop the scroll. We create content designed to capture attention and drive engagement.",
        features: [
            "Professional photography & videography",
            "Social media content calendars",
            "Graphic design for posts & stories",
            "Motion graphics & animations",
            "Content strategy & planning",
        ],
        process: [
            "Content planning & creative briefing",
            "Production scheduling & shot lists",
            "On-location shooting or studio sessions",
            "Post-production & editing",
            "Content delivery & platform optimization",
        ],
        deliverables: ["Photos/Videos", "Edited Content", "Social Graphics", "Content Calendar", "Usage Rights"],
    },
    {
        title: "Reel Production",
        icon: "🎬",
        description: "Short-form video is the new language. We write, script, shoot, and edit reels designed to trigger emotion and drive action.",
        features: [
            "Concept development & scripting",
            "Professional video production",
            "Editing & post-production",
            "Sound design & music selection",
            "Platform-optimized formats",
        ],
        process: [
            "Creative brief & concept development",
            "Storyboarding & script approval",
            "Production day(s) with professional crew",
            "Editing with revisions",
            "Final delivery in multiple formats",
        ],
        deliverables: ["Final Reel", "Raw Footage", "Subtitles/Captions", "Multiple Formats", "Behind-the-Scenes"],
    },
    {
        title: "Web Development",
        icon: "💻",
        description: "We design websites that look good, load fast, and communicate simply. Your digital home should work as hard as you do.",
        features: [
            "Custom website design & development",
            "Responsive & mobile-first approach",
            "SEO optimization",
            "Performance & speed optimization",
            "Content management system integration",
        ],
        process: [
            "Discovery & site planning",
            "Wireframing & UX design",
            "Visual design & mockups",
            "Development & testing",
            "Launch & training",
        ],
        deliverables: ["Live Website", "CMS Access", "Documentation", "Training", "1 Month Support"],
    },
    {
        title: "Social Media Management",
        icon: "📱",
        description: "We run your digital presence: content calendars, captions, design, posting, analytics. Stay consistent without burning out.",
        features: [
            "Monthly content calendar",
            "Post design & copywriting",
            "Community management & engagement",
            "Analytics & performance reporting",
            "Strategy refinement based on data",
        ],
        process: [
            "Audit current social presence",
            "Develop content strategy & themes",
            "Create & schedule monthly content",
            "Daily monitoring & engagement",
            "Monthly reporting & strategy sessions",
        ],
        deliverables: ["Content Calendar", "Designed Posts", "Captions", "Analytics Reports", "Growth Strategy"],
    },
    {
        title: "Social Media Design",
        icon: "🎭",
        description: "We create the visual identity of your feed: layouts, color systems, typography, templates. Make your brand instantly recognizable.",
        features: [
            "Feed layout & grid planning",
            "Custom post templates",
            "Story highlight covers",
            "Instagram/TikTok graphics",
            "Brand-consistent visuals",
        ],
        process: [
            "Review brand guidelines",
            "Develop social visual system",
            "Create template library",
            "Design sample posts",
            "Deliver editable templates",
        ],
        deliverables: ["Template Library", "Highlight Covers", "Design System", "Brand Kit", "Tutorial Guide"],
    },
    {
        title: "Media Buying & Planning",
        icon: "📊",
        description: "Targeted ads, budget planning, A/B testing, and performance analytics. Spend smart, grow faster.",
        features: [
            "Ad strategy & campaign planning",
            "Audience targeting & segmentation",
            "Creative development for ads",
            "Budget allocation & optimization",
            "Performance tracking & reporting",
        ],
        process: [
            "Define goals & KPIs",
            "Develop targeting strategy",
            "Create & launch campaigns",
            "Monitor & optimize performance",
            "Provide detailed analytics",
        ],
        deliverables: ["Campaign Setup", "Ad Creatives", "Performance Reports", "Optimization Plan", "ROI Analysis"],
    },
    {
        title: "Event Planning",
        icon: "🎪",
        description: "Creative concepts, on-ground execution, branding, media coverage, and full event management. Events that people remember.",
        features: [
            "Event concept & theme development",
            "Venue scouting & coordination",
            "Branding & collateral design",
            "On-site management & logistics",
            "Photo/video documentation",
        ],
        process: [
            "Define event objectives & audience",
            "Develop concept & timeline",
            "Coordinate vendors & logistics",
            "Execute event day operations",
            "Deliver post-event content & report",
        ],
        deliverables: ["Event Plan", "Branded Materials", "Day-of Coordination", "Event Photos/Videos", "Recap Report"],
    },
    {
        title: "Marketing Research",
        icon: "🔍",
        description: "Market insights, audience behavior analysis, competitor breakdown, and trend reporting. Make decisions with data, not guesses.",
        features: [
            "Market analysis & trends",
            "Competitor research & benchmarking",
            "Audience surveys & insights",
            "SWOT analysis",
            "Strategic recommendations",
        ],
        process: [
            "Define research objectives",
            "Collect data from multiple sources",
            "Analyze findings & patterns",
            "Develop insights & recommendations",
            "Present findings & action plan",
        ],
        deliverables: ["Research Report", "Competitor Analysis", "Audience Insights", "Recommendations", "Presentation"],
    },
    {
        title: "Marketing Campaigns",
        icon: "🚀",
        description: "Integrated campaign concepts crafted for social, ground activation, and digital reach. Full campaigns that create momentum.",
        features: [
            "Multi-channel campaign strategy",
            "Creative concept development",
            "Content production for all channels",
            "Campaign launch & management",
            "Results tracking & optimization",
        ],
        process: [
            "Brief & objective setting",
            "Strategy & creative development",
            "Content creation across channels",
            "Campaign rollout & monitoring",
            "Performance analysis & reporting",
        ],
        deliverables: ["Campaign Strategy", "Creative Assets", "Launch Materials", "Performance Tracking", "Final Report"],
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHero
                title="Our Services"
                subtitle="Everything Your Brand Needs to Grow"
                description="From strategy to execution, we offer comprehensive creative services that help your brand stand out and connect with your audience."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                ]}
            />

            {/* Services Grid */}
            <section className="relative py-20 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <ServiceDetail key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-magenta-500/5 blur-3xl rounded-full" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
            </section>

            <CTASection />
        </>
    );
}

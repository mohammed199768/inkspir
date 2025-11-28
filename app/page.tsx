// © Mohammad Aldomi — Project Source Code

import StatementHero from "@/components/home/StatementHero";
import LayoutGrid from "@/components/ui/LayoutGrid";
import ScrollyImages from "@/components/home/ScrollyImages";
import WhyInkspire from "@/components/home/WhyInkspireNew";
import ServicesOverview from "@/components/home/ServicesOverviewNew";
import FeaturedClients from "@/components/home/FeaturedClientsNew";
import CTASection from "@/components/home/CTASectionNew";


export default function Home() {
    return (
        <>
            <LayoutGrid />
            <StatementHero />
            <WhyInkspire />
            <ServicesOverview />
            <ScrollyImages />
            <FeaturedClients />
            <CTASection />

        </>
    );
}

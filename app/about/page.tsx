import type { Metadata } from "next";
import IntroSection from "@/components/about/IntroSection";
import PhilosophySection from "@/components/about/PhilosophySection";
import DifferenceSection from "@/components/about/DifferenceSection";
import StorySection from "@/components/about/StorySection";
import PromiseSection from "@/components/about/PromiseSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
    title: "About | Inkspire Creative Studio",
    description:
        "Learn about Inkspire's creative philosophy, our story, and what makes us different.",
};

export default function AboutPage() {
    return (
        <div className="pt-24">
            <IntroSection />
            <PhilosophySection />
            <DifferenceSection />
            <StorySection />
            <PromiseSection />
            <CTASection />
        </div>
    );
}

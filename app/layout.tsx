// © Mohammad Aldomi — Project Source Code

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdvancedParticleBackground from "@/components/ui/AdvancedParticleBackground";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Inkspire | Creative Studio",
    description:
        "Where ideas turn into stories that move people and build brands. Inkspire is a creative studio built on intuition, emotion, and strategy.",
    keywords: [
        "creative studio",
        "branding",
        "content creation",
        "social media",
        "web development",
        "marketing",
    ],
    authors: [{ name: "Mohammad Aldomi" }],
    openGraph: {
        title: "Inkspire | Creative Studio",
        description:
            "Where ideas turn into stories that move people and build brands.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body>
                <ClientLayout>
                    <AdvancedParticleBackground />
                    <Header />
                    <main className="relative z-10">{children}</main>
                    <Footer />
                </ClientLayout>
            </body>
        </html>
    );
}

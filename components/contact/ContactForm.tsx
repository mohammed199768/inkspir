// Mohammad Aldomi - Project Source Code

"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (formRef.current) {
                const fields = formRef.current.querySelectorAll(".form-field");
                gsap.fromTo(
                    fields,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: formRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        }, formRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, just show an alert. You can integrate with a backend later
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", service: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-strong p-8 md:p-10 rounded-3xl space-y-6"
        >
            <div className="form-field">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                />
            </div>

            <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                />
            </div>

            <div className="form-field">
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Needed
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                >
                    <option value="">Select a service...</option>
                    <option value="branding">Branding</option>
                    <option value="content">Content Creation</option>
                    <option value="reels">Reel Production</option>
                    <option value="web">Web Development</option>
                    <option value="social-management">Social Media Management</option>
                    <option value="social-design">Social Media Design</option>
                    <option value="media-buying">Media Buying & Planning</option>
                    <option value="events">Event Planning</option>
                    <option value="research">Marketing Research</option>
                    <option value="campaigns">Marketing Campaigns</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-field">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <div className="form-field">
                <button
                    type="submit"
                    className="w-full group relative glass-strong px-8 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
                >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
            </div>
        </form>
    );
}

// © Mohammad Aldomi — Project Source Code

"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-magenta-500 bg-clip-text text-transparent">
                            Inkspire
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Where ideas turn into stories that move people and build brands.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/clients" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    Clients
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:hello@inkspiresa.com"
                                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                                >
                                    <span>📧</span> hello@inkspiresa.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/inkspiresa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                                >
                                    <span>📱</span> @inkspiresa
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Inkspire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

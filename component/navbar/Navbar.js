"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import "./ResNavbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a href="#home" className="navbar-logo">
                    <span>&lt;</span>Hamza Ansari<span>/&gt;</span>
                </a>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    <Link href="/" className="navbar-link">
                        Home
                    </Link>
                    <Link href="portfolio" className="navbar-link">
                        Portfolio
                    </Link>
                    <Link href="contact" className="navbar-link">
                        Contact
                    </Link>
                </div>

                {/* Contact Button */}
                <a href="/contact" className="navbar-button">
                    Contact
                </a>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="mobile-menu-button"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="mobile-link"
                    >
                        Home
                    </Link>

                    <Link
                        href="/portfolio"
                        onClick={() => setIsOpen(false)}
                        className="mobile-link"
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="/contect"
                        onClick={() => setIsOpen(false)}
                        className="mobile-link"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
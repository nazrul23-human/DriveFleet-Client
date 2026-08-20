"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Add Car", href: "/add-car" },
        { name: "My Booking", href: "/my-booking" },
    ];

    const rightLinks = [
        { name: "Profile", href: "/profile" },
        { name: "Login", href: "/login" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Left Menu - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium transition ${
                                        isActive
                                            ? "text-blue-600"
                                            : "text-gray-700 hover:text-blue-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-blue-800 font-bold text-4xl sm:text-4xl"
                    >
                        DriveFleet
                    </Link>

                    {/* Right Menu - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {rightLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`font-medium transition ${
                                        isActive
                                            ? "text-blue-600"
                                            : "text-gray-700 hover:text-blue-600"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Sign Up */}
                        <Link
                            href="/signup"
                            className={`px-5 py-2.5 rounded-lg font-medium transition ${
                                pathname === "/signup"
                                    ? "bg-blue-800 text-white"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 text-2xl focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 bg-white">
                        <div className="flex flex-col gap-4 pb-3">

                            {/* Mobile Left Links */}
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`font-medium transition ${
                                            isActive
                                                ? "text-blue-600"
                                                : "text-gray-700 hover:text-blue-600"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            {/* Mobile Right Links */}
                            {rightLinks.map((link) => {
                                const isActive = pathname === link.href;

                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`font-medium transition ${
                                            isActive
                                                ? "text-blue-600"
                                                : "text-gray-700 hover:text-blue-600"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            {/* Mobile Sign Up */}
                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                                className={`px-5 py-2.5 rounded-lg font-medium text-center transition ${
                                    pathname === "/signup"
                                        ? "bg-blue-800 text-white"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
'use client'
import NavLink from "@/ui/NavLink";
import React from "react";

interface Link {
    title: string;
    href: string;
}

interface Props {
    navLinks: Link[];
}

const MobileNavigation = function ({navLinks}: Props) {
    return (
        <nav className="hidden md:flex text-white justify-center h-20 items-center gap-3 lg:gap-6">
            {navLinks.map((link) => (
                <NavLink key={link.title} title={link.title} href={link.href}/>
            ))}
        </nav>
    );
}
export default MobileNavigation;
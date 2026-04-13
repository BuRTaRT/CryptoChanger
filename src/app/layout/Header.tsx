'use client'
import React, {useState} from "react";
import NavLink from "@/ui/NavLink";
import CryptoWidget from "@/app/components/CryptoWidget";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import DesktopNavigation from "@/app/layout/components/DesktopNavigation";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {title: 'Главная', href: '/'},
        {title: 'О нас', href: '/about'},
        {title: 'Обмен', href: '/exchange'},
        {title: 'Мои заявки', href: '/myOrders'},
        {title: 'Отзывы', href: '/#'},
        {title: 'Условия соглашения', href: '/#'}
    ];

    return (
        <div className="w-full bg-[#FFA500] overflow-hidden">

            <DesktopNavigation navLinks={navLinks}/>


            <div className="md:hidden flex justify-between items-center h-16 px-4">
                <div className="font-bold text-white">Exchange</div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-2xl"
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars}/>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden text-white bg-[#FFA500] pb-4">
                    <div className="flex flex-col items-center gap-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.title}
                                title={link.title}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                    </div>
                </div>
            )}

            <CryptoWidget/>
        </div>
    );
};

export default Header;
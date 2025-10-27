'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, BurgerIcon } from "../../shared/icons";
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { LanguageSwitcher } from '../../shared/components/LanguageSwitcher';

const ContactPage = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <Link href="/" className="logo">
                        <LogoIcon />
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <LanguageSwitcher />
                        <button className="menu-button" onClick={toggleMenu}>
                            <BurgerIcon />
                        </button>
                    </div>
                </div>
            </header>

            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-overlay" onClick={closeMenu}></div>
                <div className="menu-panel">
                    <button className="close-button" onClick={closeMenu}>
                        <CloseIcon/>
                    </button>
                    <nav className="menu-nav">
                        <Link href="/privacy" className="menu-item">{t.menu.privacy}</Link>
                        <Link href="/cookies" className="menu-item">{t.menu.cookies}</Link>
                        <Link href="/contact" className="menu-item">{t.menu.contact}</Link>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="main-content">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <p style={{ fontSize: '24px' }}>info@umfinance.com</p>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;
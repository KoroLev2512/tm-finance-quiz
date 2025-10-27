'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { LanguageSwitcher } from '../../shared/components/LanguageSwitcher';

export default function CookiesPage() {
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
        <div className="policy-section">
          <div className="policy-container">
            <div className="policy-content">
              <div className="back-button-container">
                <Link href="/" className="back-button">
                  <ArrowBackIcon />
                  <span>{t.cookiesPage.back}</span>
                </Link>
              </div>
              
              <h1 className="policy-title">{t.cookiesPage.title}</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <p className="policy-text">
                    <strong>{t.cookiesPage.lastUpdate}</strong>
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.intro.split('https://umfinance.pro')[0]}
                    <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro</a>
                    {t.cookiesPage.intro.split('https://umfinance.pro')[1]}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section1Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section1Text}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section2Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section2Intro}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section2Item1}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section2Item2}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section2Item3}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section2Item4}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section3Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section3Intro}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section3Item1}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section3Item2}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section3Item3}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section3Item4}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section4Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section4Text1}
                  </p>
                  <p className="policy-text">
                    <strong>{t.cookiesPage.section4Text2}</strong>
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Text3}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Text4}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Browser1}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Browser2}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Browser3}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Browser4}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section4Text5}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section5Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section5Text}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section6Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section6Text}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section7Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section7Text}
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.cookiesPage.section8Title}</h2>
                  <p className="policy-text">
                    {t.cookiesPage.section8Text1}
                  </p>
                  <p className="policy-text">
                    {t.cookiesPage.section8Text2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

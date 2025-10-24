'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CloseIcon, LogoIcon, ArrowIcon, ArrowBackIcon, SecureIcon, BurgerIcon } from "../../shared/icons";
import { updateSEO, SEO_CONFIGS } from '../../utils/seo';
import { useLanguage } from '@/shared/i18n/LanguageContext';
import { LanguageSwitcher } from '@/shared/components/LanguageSwitcher';

export default function ResultPage() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // SPA navigation handled via Link below

  useEffect(() => {
    // Update SEO for result page
    updateSEO(SEO_CONFIGS.result)
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <button className="header-back" onClick={() => window.history.back()} aria-label="Volver">
            <ArrowBackIcon />
          </button>
          <Link href="/" className="header-logo-center"><LogoIcon/></Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <LanguageSwitcher />
            <button className="menu-button" onClick={toggleMenu}>
              <BurgerIcon/>
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
        <div className="results-section">
          {/* Results Image */}
          <div className="results-image">
            <Image src="/images/result-image.png" alt="Resultados del quiz" width={227} height={227} />
          </div>

          {/* Results Percentage */}
          <div className="results-percentage">
            <p className="results-percentage-label">{t.result.title}</p>
            <p className="results-percentage-value">{t.result.percentage}</p>
          </div>

          {/* Results Description */}
          <div className="results-description">
            <p>{t.result.description}</p>
          </div>

          {/* Results Question */}
          <h2 className="results-question">
            {t.result.question}
          </h2>

          {/* Continue Button as SPA Link */}
          <Link href="/?step=contact" className="results-continue-button" prefetch>
            {t.result.continue}
          </Link>
        </div>
      </main>
    </div>
  )
}

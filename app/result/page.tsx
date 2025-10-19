'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CloseIcon, LogoIcon, ArrowIcon, ArrowBackIcon, SecureIcon, BurgerIcon } from "../../shared/icons";
import { updateSEO, SEO_CONFIGS } from '../../utils/seo';

export default function ResultPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleResultsContinue = () => {
    // Redirect to contact page or handle the next step
    window.location.href = '/contact'
  }

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
          <button className="menu-button" onClick={toggleMenu}>
            <BurgerIcon/>
          </button>
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
            <Link href="/privacy" className="menu-item">Política de Privacidad</Link>
            <Link href="/cookies" className="menu-item">Política de Cookies</Link>
            <Link href="/contact" className="menu-item">Contacta con Nosotros</Link>
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
            <p className="results-percentage-label">Probabilidad de su crecimiento financiero:</p>
            <p className="results-percentage-value">97%</p>
          </div>

          {/* Results Description */}
          <div className="results-description">
            <p>
              Tus respuestas muestran que tienes cualidades que son perfectas
              para el crecimiento financiero. Usted es capaz de equilibrar el
              riesgo y la lógica — esto es lo que se necesita para el comercio y
              las opciones binarias.
            </p>
          </div>

          {/* Results Question */}
          <h2 className="results-question">
            ¿Quieres ver cómo es tu estilo trabaja en el mercado?
          </h2>

          {/* Continue Button */}
          <button className="results-continue-button" onClick={handleResultsContinue}>
            Continuar
          </button>
        </div>
      </main>
    </div>
  )
}

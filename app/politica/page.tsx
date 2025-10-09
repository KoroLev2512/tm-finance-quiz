'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";

export default function PoliticaPage() {
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
          <div className="logo">
            <LogoIcon />
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            <BurgerIcon />
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
            <Link href="/politica" className="menu-item">Política de Privacidad</Link>
            <Link href="/cookies" className="menu-item">Política de Cookies</Link>
            <a href="#" className="menu-item">Contacta con Nosotros</a>
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
                  <span>Volver</span>
                </Link>
              </div>
              
              <h1 className="policy-title">Política de Privacidad</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <h2 className="policy-section-title">Who We Share Your Data With</h2>
                  <p className="policy-text">
                    If you request a password reset, your IP address will be included in the reset email for security purposes.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">Your Data Rights</h2>
                  <p className="policy-text">
                    If you have an account or have left comments, you can request an exported file of your personal data that we hold, including any data you&apos;ve provided. You may also request that we erase any personal data we hold about you. This does not include data we are required to keep for administrative, legal, or security purposes.
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

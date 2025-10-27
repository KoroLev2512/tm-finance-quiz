'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";
import { useLanguage } from '../../shared/i18n/LanguageContext';
import { LanguageSwitcher } from '../../shared/components/LanguageSwitcher';

export default function PrivacyPage() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Helper function to render text with URL link
  const renderTextWithLink = (text: string) => {
    if (text.includes('https://umfinance.pro/privacy/')) {
      const parts = text.split('https://umfinance.pro/privacy/');
      return (
        <>
          {parts[0]}
          <a href="https://umfinance.pro/privacy/" target="_blank" rel="noopener noreferrer" className="policy-link">
            https://umfinance.pro/privacy/
          </a>
          {parts[1]}
        </>
      );
    }
    const parts = text.split('https://umfinance.pro');
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">
            https://umfinance.pro
          </a>
          {parts[1]}
        </>
      );
    }
    return text;
  };

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
                  <span>{t.privacyPage.back}</span>
                </Link>
              </div>
              
              <h1 className="policy-title">{t.privacyPage.title}</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.preamble}</h2>
                  <p className="policy-text">
                    {t.privacyPage.preambleText1}
                  </p>
                  <p className="policy-text">
                    {t.privacyPage.preambleText2}
                  </p>
                  <p className="policy-text">
                    {t.privacyPage.preambleText3} <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro</a>.
                  </p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section2Title}</h2>
                  <p className="policy-text">{t.privacyPage.section2Text1}</p>
                  <p className="policy-text">{t.privacyPage.section2Text2}</p>
                  <p className="policy-text">
                    {t.privacyPage.section2Text3} <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro</a>.
                  </p>
                  <p className="policy-text">{t.privacyPage.section2Text4}</p>
                  <p className="policy-text">{t.privacyPage.section2Text5}</p>
                  <p className="policy-text">{t.privacyPage.section2Text6}</p>
                  <p className="policy-text">{t.privacyPage.section2Text7}</p>
                  <p className="policy-text">
                    {t.privacyPage.section2Text8} <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro</a>.
                  </p>
                  <p className="policy-text">{t.privacyPage.section2Text9}</p>
                  <p className="policy-text">
                    {t.privacyPage.section2Text10} <a href="https://umfinance.pro" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro</a>.
                  </p>
                  <p className="policy-text">{t.privacyPage.section2Text11}</p>
                  <p className="policy-text">{t.privacyPage.section2Text12}</p>
                  <p className="policy-text">{t.privacyPage.section2Text13}</p>
                  <p className="policy-text">{t.privacyPage.section2Text14}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section3Title}</h2>
                  <p className="policy-text"><strong>{t.privacyPage.section3Text1}</strong></p>
                  <p className="policy-text">{t.privacyPage.section3Text2}</p>
                  <p className="policy-text">{t.privacyPage.section3Text3}</p>
                  <p className="policy-text">{t.privacyPage.section3Text4}</p>
                  <p className="policy-text"><strong>{t.privacyPage.section3Text5}</strong></p>
                  <p className="policy-text">{t.privacyPage.section3Text6}</p>
                  <p className="policy-text">{t.privacyPage.section3Text7}</p>
                  <p className="policy-text">{t.privacyPage.section3Text8}</p>
                  <p className="policy-text">{t.privacyPage.section3Text9}</p>
                  <p className="policy-text">{t.privacyPage.section3Text10}</p>
                  <p className="policy-text">{t.privacyPage.section3Text11}</p>
                  <p className="policy-text">{t.privacyPage.section3Text12}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section4Title}</h2>
                  <p className="policy-text"><strong>{t.privacyPage.section4Text1}</strong></p>
                  <p className="policy-text">{t.privacyPage.section4Text2}</p>
                  <p className="policy-text">{t.privacyPage.section4Text3}</p>
                  <p className="policy-text">{t.privacyPage.section4Text4}</p>
                  <p className="policy-text">{t.privacyPage.section4Text5}</p>
                  <p className="policy-text">{t.privacyPage.section4Text6}</p>
                  <p className="policy-text">{t.privacyPage.section4Text7}</p>
                  <p className="policy-text"><strong>{t.privacyPage.section4Text8}</strong></p>
                  <p className="policy-text">{t.privacyPage.section4Text9}</p>
                  <p className="policy-text">{t.privacyPage.section4Text10}</p>
                  <p className="policy-text">{t.privacyPage.section4Text11}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section5Title}</h2>
                  <p className="policy-text">{t.privacyPage.section5Text1}</p>
                  <p className="policy-text">{t.privacyPage.section5Text2}</p>
                  <p className="policy-text">{t.privacyPage.section5Text3}</p>
                  <p className="policy-text">{t.privacyPage.section5Text4}</p>
                  <p className="policy-text">{t.privacyPage.section5Text5}</p>
                  <p className="policy-text">{t.privacyPage.section5Text6}</p>
                  <p className="policy-text">{t.privacyPage.section5Text7}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section6Title}</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>{t.privacyPage.section6TableProcessing}</td>
                        <td style={{ padding: '0.75rem' }}>{t.privacyPage.section6TableProcessingValue}</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>{t.privacyPage.section6TableData}</td>
                        <td style={{ padding: '0.75rem' }}>
                          {t.privacyPage.section6TableDataValue1}<br />
                          {t.privacyPage.section6TableDataValue2}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #E5E5E5' }}>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>{t.privacyPage.section6TableLegal}</td>
                        <td style={{ padding: '0.75rem' }}>{t.privacyPage.section6TableLegalValue}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem', fontWeight: 600 }}>{t.privacyPage.section6TableTypes}</td>
                        <td style={{ padding: '0.75rem' }}>{t.privacyPage.section6TableTypesValue}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section7Title}</h2>
                  <p className="policy-text">{t.privacyPage.section7Text1}</p>
                  <p className="policy-text">{t.privacyPage.section7Text2}</p>
                  <p className="policy-text">{t.privacyPage.section7Text3}</p>
                  <p className="policy-text">{t.privacyPage.section7Text4}</p>
                  <p className="policy-text">{t.privacyPage.section7Text5}</p>
                  <p className="policy-text">{t.privacyPage.section7Text6}</p>
                  <p className="policy-text">{t.privacyPage.section7Text7}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section8Title}</h2>
                  <p className="policy-text">{t.privacyPage.section8Text1}</p>
                  <p className="policy-text">{t.privacyPage.section8Text2}</p>
                  <p className="policy-text">{t.privacyPage.section8Text3}</p>
                  <p className="policy-text">{t.privacyPage.section8Text4}</p>
                  <p className="policy-text">{t.privacyPage.section8Text5}</p>
                  <p className="policy-text">{t.privacyPage.section8Text6}</p>
                  <p className="policy-text">{t.privacyPage.section8Text7}</p>
                  <p className="policy-text">{t.privacyPage.section8Text8}</p>
                  <p className="policy-text">{t.privacyPage.section8Text9}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section9Title}</h2>
                  <p className="policy-text">{t.privacyPage.section9Text1}</p>
                  <p className="policy-text">{t.privacyPage.section9Text2}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section10Title}</h2>
                  <p className="policy-text">{t.privacyPage.section10Text1}</p>
                  <p className="policy-text">{t.privacyPage.section10Text2}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section11Title}</h2>
                  <p className="policy-text">{t.privacyPage.section11Text1}</p>
                </div>

                <div className="policy-section-item">
                  <h2 className="policy-section-title">{t.privacyPage.section12Title}</h2>
                  <p className="policy-text">{t.privacyPage.section12Text1}</p>
                  <p className="policy-text">{t.privacyPage.section12Text2}</p>
                  <p className="policy-text">
                    {t.privacyPage.section12Text3} <a href="https://umfinance.pro/privacy/" target="_blank" rel="noopener noreferrer" className="policy-link">https://umfinance.pro/privacy/</a>.
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

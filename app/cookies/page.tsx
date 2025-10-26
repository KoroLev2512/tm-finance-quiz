'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CloseIcon, LogoIcon, ArrowBackIcon, BurgerIcon } from "../../shared/icons";

export default function CookiesPage() {
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
            <Link href="/privacy" className="menu-item">Privacy Policy</Link>
            <Link href="/cookies" className="menu-item">Cookie Policy</Link>
            <Link href="/contact" className="menu-item">Contact Us</Link>
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
                  <span>Back</span>
                </Link>
              </div>
              
              <h1 className="policy-title">Cookie Policy</h1>
              
              <div className="policy-content-wrapper">
                <div className="policy-section-item">
                  <p className="policy-text">
                    <strong>Last update: 01/10/2025</strong>
                  </p>
                  <p className="policy-text">
                    In compliance with Law 34/2002 on Information Society Services and Electronic Commerce (LSSI) and the General Data Protection Regulation (GDPR), this Cookie Policy explains what Cookies are, how we use them on the website https://umfinance.pro and how you can manage them.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">1. What are Cookies?</h2>
                  <p className="policy-text">
                    Cookies are small text files that websites visited by the user send to his/her device (computer, tablet, smartphone, etc.), where they are stored to be later retransmitted to the same site on the next visit. Cookies are used by UMF Global Services Ltd. (hereinafter, &quot;we&quot; or &quot;the site&quot;) to make the site work or improve its efficiency, as well as to provide information to the site owners.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">2. Types of Cookies We Use</h2>
                  <p className="policy-text">
                    This website uses the following types of Cookies:
                  </p>
                  <p className="policy-text">
                    • Technical and Functional Cookies (essential): They are necessary for the basic functioning of the website and allow you to navigate and use its fundamental features, such as accessing secure areas. Without these Cookies, the site cannot function properly.
                  </p>
                  <p className="policy-text">
                    • Preference Cookies: They allow the website to remember information that changes the way the site behaves or looks, such as your preferred language or the region where you are located.
                  </p>
                  <p className="policy-text">
                    • Analytics and Performance Cookies: They allow us to count visits and traffic sources to measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors navigate the site. All information these cookies collect is aggregated and, therefore, anonymous.
                  </p>
                  <p className="policy-text">
                    • Marketing and Targeting Cookies: They are set by our advertising partners through our site. They may be used by those companies to create a profile of your interests and show you relevant advertisements on other sites. They do not store direct personal information, but are based on the unique identification of your browser and internet device.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">3. Purposes of Using Cookies</h2>
                  <p className="policy-text">
                    We use Cookies for the following reasons:
                  </p>
                  <p className="policy-text">
                    • To guarantee the correct technical functioning of the website.
                  </p>
                  <p className="policy-text">
                    • To remember your preferences and settings (such as language).
                  </p>
                  <p className="policy-text">
                    • To analyze how users interact with our site to improve our services and the user experience.
                  </p>
                  <p className="policy-text">
                    • (Optional) To show you personalized advertising within and outside our site.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">4. Managing Your Cookie Preferences</h2>
                  <p className="policy-text">
                    Upon first accessing our site, you will see an informational banner where you can accept or reject the use of non-essential Cookies (i.e., analytics and marketing). You can change your choice at any time.
                  </p>
                  <p className="policy-text">
                    <strong>Managing Cookies from your browser:</strong>
                  </p>
                  <p className="policy-text">
                    You can configure your browser to block Cookies or alert you about them. Since this process is slightly different for each browser, you can check the instructions in the &quot;Help&quot; menu of your browser.
                  </p>
                  <p className="policy-text">
                    Below are links to instructions for the most popular browsers:
                  </p>
                  <p className="policy-text">
                    • Google Chrome
                  </p>
                  <p className="policy-text">
                    • Mozilla Firefox
                  </p>
                  <p className="policy-text">
                    • Safari
                  </p>
                  <p className="policy-text">
                    • Microsoft Edge
                  </p>
                  <p className="policy-text">
                    Please note that completely disabling Cookies may affect the functionality of this and other websites you visit.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">5. International Data Transfer</h2>
                  <p className="policy-text">
                    Some of our Cookies, especially those for analytics and marketing, may be managed by providers located outside the European Economic Area (EEA). In such cases, we ensure that such transfers are carried out with the appropriate guarantees required by law, such as the EU Standard Contractual Clauses.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">6. Your Rights</h2>
                  <p className="policy-text">
                    You can exercise your rights of access, rectification, deletion, opposition, limitation of processing, and portability of your personal data, as described in detail in our Privacy Policy. For any request related to your personal data, you can contact us at privacy@umfinance.com.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">7. Changes to this Cookie Policy</h2>
                  <p className="policy-text">
                    We reserve the right to modify this Cookie Policy to adapt it to legislative novelties or changes in our activity. Any change will be duly communicated on this page, so we recommend that you consult it periodically.
                  </p>
                </div>
                
                <div className="policy-section-item">
                  <h2 className="policy-section-title">8. Contact</h2>
                  <p className="policy-text">
                    If you have any questions about the use of Cookies on our site, do not hesitate to contact us:
                  </p>
                  <p className="policy-text">
                    • Email: privacy@umfinance.com
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

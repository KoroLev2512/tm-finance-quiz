'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

interface CookieBannerProps {
  onAccept?: () => void
  onReject?: () => void
}

const CookieBanner = ({ onAccept, onReject }: CookieBannerProps) => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if there is already saved consent
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
    onAccept?.()
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
    onReject?.()
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-header">
          <h3 className="cookie-banner-title">{t.cookieBanner.title}</h3>
        </div>
        
        <div className="cookie-banner-body">
          <p className="cookie-banner-text">
            {t.cookieBanner.text}{' '}
            <Link href="/cookies" className="cookie-banner-link">
              {t.cookieBanner.learnMore}
            </Link>
          </p>
          
          <div className="cookie-banner-buttons">
            <button 
              className="cookie-banner-button cookie-banner-button-accept"
              onClick={handleAccept}
            >
              {t.cookieBanner.accept}
            </button>
            <button 
              className="cookie-banner-button cookie-banner-button-reject"
              onClick={handleReject}
            >
              {t.cookieBanner.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

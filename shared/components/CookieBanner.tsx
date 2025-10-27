'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface CookieBannerProps {
  onAccept?: () => void
  onReject?: () => void
}

const CookieBanner = ({ onAccept, onReject }: CookieBannerProps) => {
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
          <h3 className="cookie-banner-title">Prioritizing Your Privacy</h3>
        </div>
        
        <div className="cookie-banner-body">
          <p className="cookie-banner-text">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. Some cookies are necessary for the website to function and cannot be switched off.
            {' '}
            By clicking &quot;Accept All&quot;, you consent to the use of all cookies, including those for analytics and marketing.
            {' '}
            <Link href="/cookies" className="cookie-banner-link">
              Click here to learn more
            </Link>
            .
          </p>
          
          <div className="cookie-banner-buttons">
            <button 
              className="cookie-banner-button cookie-banner-button-accept"
              onClick={handleAccept}
            >
              Accept All
            </button>
            <button 
              className="cookie-banner-button cookie-banner-button-reject"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

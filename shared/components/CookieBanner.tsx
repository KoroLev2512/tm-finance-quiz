'use client'

import { useState, useEffect } from 'react'

interface CookieBannerProps {
  onAccept?: () => void
  onReject?: () => void
}

const CookieBanner = ({ onAccept, onReject }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Проверяем, есть ли уже сохраненное согласие
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
          <h3 className="cookie-banner-title">Priorizando Su Privacidad</h3>
        </div>
        
        <div className="cookie-banner-body">
          <p className="cookie-banner-text">
            Al hacer clic en "Aceptar", nos autoriza a almacenar cookies para 
            mejorar la navegación del sitio, el análisis detallado del uso y 
            el material de marketing mejorado. No estar de acuerdo puede 
            afectar las funcionalidades del sitio. Leer más
          </p>
          
          <div className="cookie-banner-buttons">
            <button 
              className="cookie-banner-button cookie-banner-button-accept"
              onClick={handleAccept}
            >
              Aceptar
            </button>
            <button 
              className="cookie-banner-button cookie-banner-button-reject"
              onClick={handleReject}
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

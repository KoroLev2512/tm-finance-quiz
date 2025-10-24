'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { locales, type Locale } from '../i18n/locales';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="language-code">{locale.toUpperCase()}</span>
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`arrow ${isOpen ? 'open' : ''}`}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {locales.map((loc) => (
            <button
              key={loc}
              className={`language-option ${locale === loc ? 'active' : ''}`}
              onClick={() => handleSelect(loc)}
            >
              {loc.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .language-switcher {
          position: relative;
          z-index: 1000;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: var(--font-inter), sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #3D568F;
          transition: opacity 0.2s ease;
        }

        .language-button:hover {
          opacity: 0.8;
        }

        .language-code {
          line-height: 1.4;
          white-space: nowrap;
        }

        .arrow {
          flex-shrink: 0;
          transition: transform 0.2s ease;
          color: #3D568F;
        }

        .arrow.open {
          transform: scaleY(-1);
        }

        .language-dropdown {
          position: absolute;
          top: calc(100% + 5px);
          right: 0;
          min-width: 60px;
          background: #FFFFFF;
          border-radius: 2px;
          box-shadow: 0px 4px 30px 0px rgba(0, 6, 14, 0.03);
          padding: 5px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .language-option {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0 10px;
          background: transparent;
          border: none;
          border-radius: 4px;
          font-family: var(--font-inter), sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #3D568F;
          cursor: pointer;
          line-height: 1.4;
          white-space: nowrap;
          transition: background-color 0.2s ease;
        }

        .language-option:hover {
          background: #E8F0FF;
        }

        .language-option.active {
          background: #E8F0FF;
        }

        @media (max-width: 768px) {
          .language-button {
            font-size: 14px;
          }

          .language-option {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}

